"use client";

import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export { QRCodeGenerator }

function QRCodeGenerator() {
  const [url, setUrl] = useState("https://designali.in");
  const [qrCode, setQRCode] = useState("https://designali.in");
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [size, setSize] = useState(200);
  const [errorCorrection, setErrorCorrection] = useState("M");
  const qrRef = useRef<HTMLDivElement>(null);

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault();
    setQRCode(url);
  };

  const downloadSVG = () => {
    const svgElement = qrRef.current?.querySelector("svg");
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgBlob = new Blob([serializer.serializeToString(svgElement)], {
        type: "image/svg+xml",
      });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.svg";
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const downloadPNG = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;
    const img = new Image();
    img.src = `data:image/svg+xml,${encodeURIComponent(qrRef.current?.innerHTML || "")}`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    };
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="mt-6">
          <form onSubmit={generateQRCode} className="space-y-4">
            <div> 
              <Input
                id="url"
                type="url"
                placeholder="Enter a URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div className="flex w-full flex-wrap  justify-between gap-4">
              <div className="relative flex w-full max-w-[40px] items-center gap-3">
                <label className="text-lg font-bold">
                  <div
                    className="border-ali size-10 cursor-pointer rounded-full border-2"
                    style={{ backgroundColor: color }}
                  />
                </label>
                <Input
                  className="absolute left-0 top-3 opacity-0"
                  type="color"
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="relative flex w-full max-w-[40px] items-center gap-3">
                <label className="text-lg font-bold">
                  <div
                    className="border-ali size-10 cursor-pointer rounded-full border-2"
                    style={{ backgroundColor: backgroundColor }}
                  />
                </label>
                <Input
                  className="absolute left-0 top-3 opacity-0"
                  type="color"
                  id="backgroundColor"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="size">
                  Size: {size}x{size}
                </Label>
                <Slider
                  id="size"
                  min={100}
                  max={800}
                  step={10}
                  value={[size]}
                  onValueChange={(value) => {
                    if (value[0] !== undefined) {
                      setSize(value[0]);
                    }
                  }}
                  className="w-60 md:w-80"
                />
              </div>
              <div> 
              <Select
                value={errorCorrection}
                onValueChange={setErrorCorrection}
              >
                <SelectTrigger id="errorCorrection">
                  <SelectValue placeholder="Select error correction level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Low (7%)</SelectItem>
                  <SelectItem value="M">Medium (15%)</SelectItem>
                  <SelectItem value="Q">Quartile (25%)</SelectItem>
                  <SelectItem value="H">High (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>

            
            <Button type="submit" className="w-full">
              Generate QR Code
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          {qrCode && (
            <div className="mt-4" ref={qrRef}>
              <QRCodeSVG
                value={qrCode}
                size={size}
                fgColor={color}
                bgColor={backgroundColor}
                level={errorCorrection as "L" | "M" | "Q" | "H"}
                includeMargin={true}
              />
            </div>
          )}
          <div className="flex space-x-4">
            <Button onClick={downloadPNG}>Download PNG</Button>
            <Button onClick={downloadSVG}>Download SVG</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
