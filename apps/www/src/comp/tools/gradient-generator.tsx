"use client";

import { useRef, useState } from "react";
import { Slider } from "@/registry/default/ui/slider";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toasts";
import { toast } from "@/components/ui/use-toast";

export function GradientGenerator() {
  const [color1, setColor1] = useState("#00e1ff");
  const [color2, setColor2] = useState("#0000ff");
  const [angle, setAngle] = useState(90);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
  };

  const gradientCSS = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCSS).then(() => {
      toast({
        title: "Copied!",
        description: "Gradient CSS copied to clipboard",
      });
    });
  };

  const downloadJPG = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const dataURL = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "gradient.jpg";
        link.href = dataURL;
        link.click();
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-6 xl:p-0">
      <div
        className=" absolute -top-28 -z-20 h-full w-full [mask-image:radial-gradient(800rem_200rem_at_top,white,transparent)]"
        style={gradientStyle}
      ></div>
      <div className="mx-auto w-full max-w-7xl space-y-3 rounded-2xl bg-popover/80 p-6 ">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 ">
              <Label htmlFor="color1">Color 1</Label>
              <Input
                id="color1"
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="h-10 w-full"
              />
            </div>
            <div className="flex-1 ">
              <Label htmlFor="color2">Color 2</Label>
              <Input
                id="color2"
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="h-10 w-full"
              />
            </div>
            <div>
              <Label htmlFor="angle">Angle: {angle}°</Label>
              <Slider
                id="angle"
                value={[angle]}
                defaultValue={[33]}
                min={0}
                max={360}
                className="w-full"
                onValueChange={(value) => setAngle(Number(value))}
              />
            </div>
          </div>
        </div>
        <div className="h-48 rounded-md" style={gradientStyle}></div>
        <div className="grid gap-3">
          <div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <Label htmlFor="css">CSS Code</Label>
              <Input
                id="css"
                value={gradientCSS}
                readOnly
                className="w-auto flex-grow"
              />
              <Button variant="outline" onClick={copyToClipboard} className=" ">
                Copy
              </Button>
              <Button onClick={downloadJPG} className="">
                Download JPG
              </Button>
            </div>
          </div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width="1000"
        height="1000"
        style={{ display: "none" }}
      />
      <Toaster />
    </div>
  );
}
