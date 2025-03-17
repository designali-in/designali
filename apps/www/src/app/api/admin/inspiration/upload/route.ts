import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/src/lib/auth";

import cloudinary from "@/lib/cloud";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const websitelink = formData.get("websitelink") as string;
  const files = formData.getAll("files") as File[];
  const tags = formData.get("tags") as string;

  if (!title || files.length === 0) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const uploadPromises = files.map(async (file) => {
      const fileBuffer = await file.arrayBuffer();
      const fileBase64 = Buffer.from(fileBuffer).toString("base64");
      const fileUri = `data:${file.type};base64,${fileBase64}`;

      return cloudinary.uploader.upload(fileUri, {
        folder: "inspiration",
      });
    });

    const uploadResponses = await Promise.all(uploadPromises);

    const tagArray = tags ? tags.split(",").map((tag) => tag.trim()) : [];

    const asset = await prisma.inspiration.create({
      data: {
        title,
        description,
        websitelink,
        url: uploadResponses.map((response) => response.secure_url).join(","),
        userId: session.user.id as string,
        tags: {
          connectOrCreate: tagArray.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
      include: {
        tags: true,
      },
    });

    return NextResponse.json(asset);
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    return NextResponse.json(
      { error: "Error uploading files" },
      { status: 500 },
    );
  }
}
