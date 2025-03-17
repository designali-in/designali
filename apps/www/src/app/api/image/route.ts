//@ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HistoryItem, HistoryPart } from "@/types/global";

// Initialize the Google Gen AI client with your API key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Define the model ID for Gemini 2.0 Flash experimental
const MODEL_ID = "gemini-2.0-flash-exp";

// Define interface for the formatted history item
interface FormattedHistoryItem {
  role: "user" | "model";
  parts: Array<{
    text?: string;
    inlineData?: { data: string; mimeType: string };
  }>;
}

export async function POST(req: NextRequest) {
  try {
    // Parse JSON request instead of FormData
    const requestData = await req.json();
    const { prompt, image: inputImage, history } = requestData;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Get the model with the correct configuration
    const model = genAI.getGenerativeModel({
      model: MODEL_ID,
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        // @ts-expect-error - Gemini API JS is missing this type
        responseModalities: ["Text", "Image"],
      },
    });

    let result;

    try {
      // Convert history to the format expected by Gemini API
      const formattedHistory =
        history && history.length > 0
          ? history
              .map((item: HistoryItem) => {
                return {
                  role: item.role,
                  parts: item.parts
                    .map((part: HistoryPart) => {
                      if (part.text) {
                        return { text: part.text };
                      }
                      if (part.image && item.role === "user") {
                        const imgParts = part.image.split(",");
                        if (imgParts.length > 1) {
                          return {
                            inlineData: {
                              data: imgParts[1],
                              mimeType: part.image.includes("image/png")
                                ? "image/png"
                                : "image/jpeg",
                            },
                          };
                        }
                      }
                      return { text: "" };
                    })
                    .filter((part) => Object.keys(part).length > 0), // Remove empty parts
                };
              })
              .filter((item: FormattedHistoryItem) => item.parts.length > 0) // Remove items with no parts
          : [];

      // Create a chat session with the formatted history
      const chat = model.startChat({
        history: formattedHistory,
      });

      // Prepare the current message parts
      const messageParts = [];

      // Add the text prompt
      messageParts.push({ text: prompt });

      // Add the image if provided
      if (inputImage) {
        // For image editing
        console.log("Processing image edit request");

        // Check if the image is a valid data URL
        if (!inputImage.startsWith("data:")) {
          throw new Error("Invalid image data URL format");
        }

        const imageParts = inputImage.split(",");
        if (imageParts.length < 2) {
          throw new Error("Invalid image data URL format");
        }

        const base64Image = imageParts[1];
        const mimeType = inputImage.includes("image/png")
          ? "image/png"
          : "image/jpeg";
        console.log(
          "Base64 image length:",
          base64Image.length,
          "MIME type:",
          mimeType
        );

        // Add the image to message parts
        messageParts.push({
          inlineData: {
            data: base64Image,
            mimeType: mimeType,
          },
        });
      }

      // Send the message to the chat
      console.log("Sending message with", messageParts.length, "parts");
      result = await chat.sendMessage(messageParts);
    } catch (error) {
      console.error("Error in chat.sendMessage:", error);
      throw error;
    }

    const response = result.response;

    let textResponse = null;
    let imageData = null;
    let mimeType = "image/png";

    // Process the response
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      console.log("Number of parts in response:", parts.length);

      for (const part of parts) {
        if ("inlineData" in part && part.inlineData) {
          // Get the image data
          imageData = part.inlineData.data;
          mimeType = part.inlineData.mimeType || "image/png";
          console.log(
            "Image data received, length:",
            imageData.length,
            "MIME type:",
            mimeType
          );
        } else if ("text" in part && part.text) {
          // Store the text
          textResponse = part.text;
          console.log(
            "Text response received:",
            textResponse.substring(0, 50) + "..."
          );
        }
      }
    }

    // Return just the base64 image and description as JSON
    return NextResponse.json({
      image: imageData ? `data:${mimeType};base64,${imageData}` : null,
      description: textResponse,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      {
        error: "Failed to generate image",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}