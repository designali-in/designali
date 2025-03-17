"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ImagePromptInputProps {
  onSubmit: (prompt: string) => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function ImagePromptInput({
  onSubmit,
  isEditing,
  isLoading,
}: ImagePromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit(prompt.trim());
      setPrompt("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg">
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">
          {isEditing
            ? "Describe how you want to edit the image"
            : "Describe the image you want to generate"}
        </p>
      </div>

      <Input
        id="prompt"
        className="border-secondary resize-none"
        placeholder={
          isEditing
            ? "Example: Make the background blue and add a rainbow..."
            : "Example: Create a futuristic, dreamy composition inspired by the moon and space illusions."
        }
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button
        type="submit"
        disabled={!prompt.trim() || isLoading}
         
      >
        <Wand2 className="w-4 h-4" />
        {isEditing ? "Edit Image" : "Generate Image"}
      </Button>
    </form>
  );
}