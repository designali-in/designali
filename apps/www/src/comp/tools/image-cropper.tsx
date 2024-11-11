"use client";

import type { SyntheticEvent } from "react";
import type { Crop, PixelCrop } from "react-image-crop";
import React from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import "react-image-crop/dist/ReactCrop.css";

import type { FileWithPreview } from "@/app/(dashboard)/dashboard/tools/image-crop/page";
import { cn } from "@/src/lib/utils";
import { DIcons } from "dicons";

import GridPattern from "../uis/grid-pattern";

interface ImageCropperProps {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFile: FileWithPreview | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<FileWithPreview | null>>;
}

export function ImageCropper({
  dialogOpen,
  setDialogOpen,
  selectedFile,
  setSelectedFile,
}: ImageCropperProps) {
  const aspect = 1;

  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const [crop, setCrop] = React.useState<Crop>();
  const [croppedImageUrl, setCroppedImageUrl] = React.useState<string>("");
  const [croppedImage, setCroppedImage] = React.useState<string>("");

  function onImageLoad(e: SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onCropComplete(crop: PixelCrop) {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImageUrl = getCroppedImg(imgRef.current, crop);
      setCroppedImageUrl(croppedImageUrl);
    }
  }

  function getCroppedImg(image: HTMLImageElement, crop: PixelCrop): string {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.imageSmoothingEnabled = false;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY,
      );
    }

    return canvas.toDataURL("image/png", 1.0);
  }

  async function onCrop() {
    try {
      setCroppedImage(croppedImageUrl);
      setDialogOpen(false);
    } catch (error) {
      alert("Something went wrong!");
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center gap-4 p-4 text-2xl">
      <div className="relative">
        <div className="relative flex aspect-square justify-center border">
          <GridPattern
            width={9}
            height={9}
            x={-1}
            y={-1}
            strokeDasharray={"1 1"}
            className={cn("-z-10")}
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -left-3 -top-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -bottom-3 -left-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -right-3 -top-3 h-6"
          />
          <DIcons.Plus
            strokeWidth={1}
            className="text-ali absolute -bottom-3 -right-3 h-6"
          />
          <div className="p-4">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger>
                <Avatar className="size-36 cursor-pointer ring-2 ring-slate-200 ring-offset-2">
                  <AvatarImage
                    src={croppedImage ? croppedImage : selectedFile.preview}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DialogTrigger>
              <DialogContent className="gap-0 p-0">
                <div className="size-full p-6">
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => onCropComplete(c)}
                    aspect={aspect}
                    className="w-full"
                  >
                    <Avatar className="size-full rounded-none">
                      <AvatarImage
                        ref={imgRef}
                        className="size-full rounded-none "
                        alt="Image Cropper Shell"
                        src={selectedFile.preview}
                        onLoad={onImageLoad}
                      />
                      <AvatarFallback className="size-full min-h-[460px] rounded-none">
                        Loading...
                      </AvatarFallback>
                    </Avatar>
                  </ReactCrop>
                </div>
                <DialogFooter className="justify-center p-6 pt-0 ">
                  <DialogClose asChild>
                    <Button
                      size={"sm"}
                      type="reset"
                      className="w-fit"
                      variant={"outline"}
                      onClick={() => {
                        setSelectedFile(null);
                      }}
                    >
                      <DIcons.Trash2 className="mr-1.5 size-4" />
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    size={"sm"}
                    className="w-fit"
                    onClick={onCrop}
                  >
                    <DIcons.Crop className="mr-1.5 size-4" />
                    Crop
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to center the crop
export function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
): Crop {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 50,
        height: 50,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}
