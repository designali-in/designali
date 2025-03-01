"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Download, Upload, ImageIcon } from "lucide-react";
import { compressImage } from "@/lib/img/image-utils";

export function ImageCompressor() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState(80);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);
  const [resizeMode, setResizeMode] = useState<"fit" | "fill">("fit");
  const [format, setFormat] = useState<"jpeg" | "webp" | "png">("jpeg");
  const [preserveMetadata, setPreserveMetadata] = useState(false);
  const [imageInfo, setImageInfo] = useState<{
    width: number;
    height: number;
    size: number;
  } | null>(null);
  const [processedInfo, setProcessedInfo] = useState<{
    width: number;
    height: number;
    size: number;
  } | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setOriginalImage(reader.result as string);
        setProcessedImage(null);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxFiles: 1,
  });

  const handleCompress = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    try {
      const compressed = await compressImage(originalImage, {
        quality: compressionLevel,
        maxWidth,
        maxHeight,
        resizeMode,
        format,
        preserveMetadata,
      });
      setProcessedImage(compressed);
    } catch (error) {
      console.error("Error compressing image:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement("a");
    link.href = processedImage;
    link.download = `compressed-image.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Original Image</CardTitle>
            <CardDescription>Upload an image to compress</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              {...getRootProps()}
              className={`border-2 aspect-video items-center flex justify-center border-dashed rounded-3xl p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? "border-primary bg-primary/10"
                  : "border-muted-foreground/20 hover:border-primary/50"
              }`}
            >
              <input {...getInputProps()} />
              {originalImage ? (
                <div className="space-y-2">
                  {imageInfo && (
                    <div className="text-xs text-muted-foreground flex justify-between">
                      <span>
                        {imageInfo.width} × {imageInfo.height}px
                      </span>
                      <span>
                        {imageInfo.size > 1024
                          ? `${(imageInfo.size / 1024).toFixed(2)} MB`
                          : `${imageInfo.size} KB`}
                      </span>
                    </div>
                  )}
                  <div className="relative  flex items-center justify-center overflow-hidden">
                    <Image
                      src={originalImage || "/placeholder.svg"}
                      alt="Original"
                      width={300}
                      height={300}
                      className="max-h-full max-w-full object-contain"
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        setImageInfo({
                          width: img.naturalWidth,
                          height: img.naturalHeight,
                          size: Math.round(
                            (originalImage.length * 0.75) / 1024
                          ),
                        });
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Drag & drop an image here, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, WEBP
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compressed Image</CardTitle>
            <CardDescription>
              Adjust settings and compress to see the result
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-3xl aspect-video items-center flex justify-center p-8 border">
              <div className="relative flex flex-col items-center justify-center overflow-hidden bg-muted/20">
                {processedImage ? (
                  <div className="space-y-2 w-full">
                    {processedInfo && (
                      <div className="text-xs text-muted-foreground flex justify-between px-2">
                        <span>
                          {processedInfo.width} × {processedInfo.height}px
                        </span>
                        <span>
                          {processedInfo.size > 1024
                            ? `${(processedInfo.size / 1024).toFixed(2)} MB`
                            : `${processedInfo.size} KB`}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-center h-full">
                      <Image
                        width={300}
                        height={300}
                        src={processedImage || "/placeholder.svg"}
                        alt="Compressed"
                        className="max-h-full max-w-full object-contain"
                        onLoad={(e) => {
                          const img = e.target as HTMLImageElement;
                          setProcessedInfo({
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                            size: Math.round(
                              (processedImage.length * 0.75) / 1024
                            ),
                          });
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Compressed image will appear here
                    </p>
                  </div>
                )}
                {isProcessing && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              onClick={handleDownload}
              disabled={!processedImage || isProcessing}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Compression Settings</CardTitle>
          <CardDescription>
            Adjust these settings to optimize your image compression
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Compression Level: {compressionLevel}%</Label>
              <Slider
                value={[compressionLevel]}
                onValueChange={(value) => {
                  if (value[0] !== undefined) {
                    setCompressionLevel(value[0]);
                  }
                }}
                min={0}
                max={100}
                step={1}
              />
              <p className="text-xs text-muted-foreground">
                Higher values retain more quality but result in larger file
                sizes
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center  gap-3">
              <div className="space-y-2 w-40">
                <Label htmlFor="max-width">Max Width (px)</Label>
                <input
                  id="max-width"
                  type="number"
                  value={maxWidth}
                  onChange={(e) =>
                    setMaxWidth(Number.parseInt(e.target.value) || 0)
                  }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="space-y-2 w-40">
                <Label htmlFor="max-height">Max Height (px)</Label>
                <input
                  id="max-height"
                  type="number"
                  value={maxHeight}
                  onChange={(e) =>
                    setMaxHeight(Number.parseInt(e.target.value) || 0)
                  }
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex justify-center flex-wrap gap-3">
                <div className="space-y-2  w-60">
                  <Label>Resize Mode</Label>
                  <Select
                    value={resizeMode}
                    onValueChange={(value: "fit" | "fill") =>
                      setResizeMode(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fit">
                        Fit (maintain aspect ratio)
                      </SelectItem>
                      <SelectItem value="fill">
                        Fill (may crop image)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 w-40">
                  <Label>Output Format</Label>
                  <Select
                    value={format}
                    onValueChange={(value: "jpeg" | "webp" | "png") =>
                      setFormat(value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jpeg">JPEG</SelectItem>
                      <SelectItem value="webp">WebP</SelectItem>
                      <SelectItem value="png">PNG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center mt-6 space-x-2">
                  <Switch
                    id="preserve-metadata"
                    checked={preserveMetadata}
                    onCheckedChange={setPreserveMetadata}
                  />
                  <Label htmlFor="preserve-metadata">Preserve Metadata</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-6 justify-center gap-2">
            <Button
              onClick={handleCompress}
              disabled={!originalImage || isProcessing}
              className=""
            >
              Compress Image
            </Button>

            <Button
              onClick={() => {
                setOriginalImage(null);
                setProcessedImage(null);
                setImageInfo(null);
                setProcessedInfo(null);
                setCompressionLevel(80);
                setMaxWidth(1920);
                setMaxHeight(1080);
                setResizeMode("fit");
                setFormat("jpeg");
                setPreserveMetadata(false);
              }}
              variant="outline"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
