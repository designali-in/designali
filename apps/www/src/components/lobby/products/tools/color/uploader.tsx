/* eslint-disable @next/next/no-img-element */
"use client";

import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { ColorInfo } from "@/types/color";
import { DIcons } from "dicons";
import { extractColors } from "extract-colors";

type Props = {
  onImageSelect: (colors: ColorInfo[]) => void;
};

const Uploader: FC<Props> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (event): Promise<void> => {
        const imageDataUrl = reader.result as string;
        setSelectedImage(imageDataUrl);
        const img = new Image();

        img.onload = async (): Promise<void> => {
          const result = await extractColors(img);
          onImageSelect(result);
        };

        img.src = event.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = (): void => {
    setSelectedImage(null);
    onImageSelect([]); // Reset extracted colors
  };

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center">
      <label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-1"
      >
        {selectedImage ? (
          <div className="relative h-full w-full overflow-hidden">
            <img
              src={selectedImage}
              alt="Selected"
              className="h-full w-full object-contain"
            />
            <Button
              onClick={handleClearImage}
              size="icon"
              className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-white"
            >
              <DIcons.Close />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <DIcons.Upload />
            <p className="my-2 text-sm text-primary/70">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs">SVG, PNG, or JPG</p>
          </div>
        )}

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default Uploader;
