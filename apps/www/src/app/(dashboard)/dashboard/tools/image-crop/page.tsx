"use client";

import type { FileWithPath } from "react-dropzone";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/designali/ui/avatar";
import { ImageCropper } from "@/src/comp/tools/image-cropper";
import { useDropzone } from "react-dropzone";

export type FileWithPreview = FileWithPath & {
  preview: string;
};

const accept = {
  "image/*": [],
};

export default function HomePage() {
  const [selectedFile, setSelectedFile] =
    React.useState<FileWithPreview | null>(null);
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const onDrop = React.useCallback(
    (acceptedFiles: FileWithPath[]) => {
      const file = acceptedFiles[0];
      if (!file) {
        alert("Selected image is too large!");
        return;
      }

      const fileWithPreview = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      setSelectedFile(fileWithPreview);
      setDialogOpen(true);
    },

    [],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  return (
    <main className="p-6">
      <div className="">
        <h1 className="py-4 text-2xl font-semibold">Image Crop</h1>
      </div>
      {selectedFile ? (
        <ImageCropper
          dialogOpen={isDialogOpen}
          setDialogOpen={setDialogOpen}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      ) : (
        <Avatar
          {...getRootProps()}
          className="size-36 cursor-pointer ring-2 ring-slate-200 ring-offset-2"
        >
          <input {...getInputProps()} />
          <AvatarImage src="/ali.jpeg" alt="@shadcn" />
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
      )}
    </main>
  );
}
