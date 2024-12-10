"use client";

import { useEffect, useRef, useState } from "react";
import { Slider } from "@/registry/default/ui/slider";
import { Switch } from "@/registry/default/ui/switch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/toaster";

export function GradientGenerator() {
  const [color1, setColor1] = useState("#00e1ff");
  const [color2, setColor2] = useState("#0000ff");
  const [angle, setAngle] = useState(90);
  const [noiseAmount, setNoiseAmount] = useState(0);
  const [applyNoise, setApplyNoise] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);

  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
  };

  const gradientCSS = `background: linear-gradient(${angle}deg, ${color1}, ${color2});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCSS).then(() => {
      toast("Copied! Gradient CSS copied to clipboard");
    });
  };

  useEffect(() => {
    updateCanvas();
  }, [color1, color2, angle, noiseAmount, applyNoise]);

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    const displayCanvas = displayCanvasRef.current;
    if (canvas && displayCanvas) {
      const ctx = canvas.getContext("2d");
      const displayCtx = displayCanvas.getContext("2d");
      if (ctx && displayCtx) {
        // Create gradient
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

        if (applyNoise) {
          // Apply noise
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * noiseAmount;
            data[i] = Math.min(255, Math.max(0, data[i] + noise));
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
          }
          ctx.putImageData(imageData, 0, 0);
        }

        // Update display canvas
        displayCtx.drawImage(
          canvas,
          0,
          0,
          displayCanvas.width,
          displayCanvas.height,
        );
      }
    }
  };

  const downloadJPG = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Create gradient
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

        if (applyNoise) {
          // Apply noise
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * noiseAmount;
            data[i] = Math.min(255, Math.max(0, data[i] + noise)); // Red channel
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise)); // Green channel
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise)); // Blue channel
          }
          ctx.putImageData(imageData, 0, 0);
        }

        // Convert canvas to JPEG and trigger download
        const dataURL = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "gradient_with_noise.jpg";
        link.href = dataURL;
        link.click();
      }
    }
  };

  return (
    <div className="mt-10 flex items-center justify-center p-6 xl:p-0">
      <div
        className=" absolute -top-28 -z-20 h-full w-full [mask-image:radial-gradient(800rem_200rem_at_top,white,transparent)]"
        style={gradientStyle}
      ></div>
      <div className="mx-auto w-full max-w-7xl space-y-2 rounded-2xl bg-popover/80 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative">
            <div className="h-48 rounded-md" style={gradientStyle}></div>

            <canvas
              ref={displayCanvasRef}
              width={1000}
              height={1000}
              className="absolute left-0 top-0 h-full w-full rounded-md mix-blend-overlay"
            />
          </div>
          <div className="grid   gap-2">
            <div className="flex gap-2">
              <div className="relative flex w-full max-w-[40px] items-center  gap-3">
                <label htmlFor="color" className="text-lg font-bold">
                  <div
                    className="border-ali size-10 cursor-pointer rounded-full border-2"
                    style={{ backgroundColor: color1 }}
                  />
                </label>
                <Input
                  className="absolute left-0 top-3 opacity-0"
                  type="color"
                  id="color1"
                  onChange={(e) => setColor1(e.target.value)}
                />
              </div>
              <div className="relative flex w-full max-w-[40px] items-center  gap-3">
                <label htmlFor="color" className="text-lg font-bold">
                  <div
                    className="border-ali size-10 cursor-pointer rounded-full border-2"
                    style={{ backgroundColor: color2 }}
                  />
                </label>
                <Input
                  className="absolute left-0 top-3 opacity-0"
                  type="color"
                  id="color2"
                  onChange={(e) => setColor2(e.target.value)}
                />
              </div>
              <div className="flex w-full items-center gap-2">
                <Label className="w-auto" htmlFor="angle">
                  Angle
                </Label>
                <Slider
                  id="angle"
                  value={[angle]}
                  defaultValue={[33]}
                  min={0}
                  max={360}
                  className="w-full"
                  onValueChange={(value) => setAngle(Number(value))}
                />
                <Label className="w-auto" htmlFor="angle">
                  {angle}°
                </Label>
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <Switch
                id="apply-noise"
                checked={applyNoise}
                onCheckedChange={setApplyNoise}
              />
              <Label className="w-auto" htmlFor="apply-noise">
                Noise
              </Label>
              {applyNoise && (
                <div className="flex w-full gap-2">
                  <Slider
                    id="noise"
                    defaultValue={[33]}
                    min={0}
                    max={200}
                    value={[noiseAmount]}
                    className="w-full"
                    onValueChange={(value) => setNoiseAmount(Number(value))}
                  />
                  <Label className="w-auto" htmlFor="noise">
                    {noiseAmount}
                  </Label>
                </div>
              )}
            </div>

            <div className="">
              <div className="grid gap-2">
                <div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <Label htmlFor="css">CSS Code</Label>
                    <Input
                      id="css"
                      value={gradientCSS}
                      readOnly
                      className="w-auto flex-grow"
                    />
                    <Button
                      variant="outline"
                      onClick={copyToClipboard}
                      className=" "
                    >
                      Copy
                    </Button>
                    <Button onClick={downloadJPG} className="">
                      Download JPG
                    </Button>
                  </div>
                </div>
              </div>
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
    </div>
  );
}
