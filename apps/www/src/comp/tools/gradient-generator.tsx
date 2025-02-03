"use client";

import { useEffect, useRef, useState } from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

type ColorStop = {
  color: string;
  position: number;
};

const defaultColorStops: ColorStop[] = [
  { color: "#00e1ff", position: 0 },
  { color: "#0000ff", position: 100 },
];

function Graaadients() {
  const [colorStops, setColorStops] = useState<ColorStop[]>(defaultColorStops);
  const [angle, setAngle] = useState(90);
  const [noiseAmount, setNoiseAmount] = useState(0);
  const [applyNoise, setApplyNoise] = useState(false);
  const [isRadialGradient, setIsRadialGradient] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement>(null);

  const gradientString = colorStops
    .map((stop) => `${stop.color} ${stop.position}%`)
    .join(", ");

  const gradientStyle = {
    background: !isRadialGradient
      ? `linear-gradient(${angle}deg, ${gradientString})`
      : `radial-gradient(circle, ${gradientString})`,
  };

  const gradientCSS = !isRadialGradient
    ? `background: linear-gradient(${angle}deg, ${gradientString});`
    : `background: radial-gradient(circle, ${gradientString});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradientCSS).then(() => {});
  };

  useEffect(() => {
    updateCanvas();
  }, [colorStops, angle, noiseAmount, applyNoise, isRadialGradient]);

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    const displayCanvas = displayCanvasRef.current;
    if (canvas && displayCanvas) {
      const ctx = canvas.getContext("2d");
      const displayCtx = displayCanvas.getContext("2d");
      if (ctx && displayCtx) {
        let gradient;
        if (!isRadialGradient) {
          gradient = ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height,
          );
        } else {
          gradient = ctx.createRadialGradient(
            canvas.width / 2,
            canvas.height / 2,
            0,
            canvas.width / 2,
            canvas.height / 2,
            canvas.width / 2,
          );
        }

        colorStops.forEach((stop) => {
          gradient.addColorStop(stop.position / 100, stop.color);
        });

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (applyNoise) {
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
      const dataURL = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.download = "gradient_with_noise.jpg";
      link.href = dataURL;
      link.click();
    }
  };

  const addColorStop = () => {
    if (colorStops.length < 5) {
      const newPosition = Math.round(
        (colorStops[colorStops.length - 1].position + colorStops[0].position) /
          2,
      );
      setColorStops([
        ...colorStops,
        { color: "#ffffff", position: newPosition },
      ]);
    }
  };

  const removeColorStop = (index: number) => {
    if (colorStops.length > 2) {
      setColorStops(colorStops.filter((_, i) => i !== index));
    }
  };

  const updateColorStop = (index: number, color: string, position: number) => {
    const newColorStops = [...colorStops];
    newColorStops[index] = { color, position };
    setColorStops(newColorStops.sort((a, b) => a.position - b.position));
  };

  const resetSettings = () => {
    setColorStops(defaultColorStops);
    setAngle(90);
    setNoiseAmount(0);
    setApplyNoise(false);
    setIsRadialGradient(false);
  };

  return (
    <div className="mt-10 flex items-center justify-center  p-6 xl:p-0">
      <div className="mx-auto w-full max-w-7xl space-y-2 rounded-2xl border-2 bg-popover/80 p-6">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative">
            <div
              className="aspect-square h-full w-60 rounded-md md:w-80"
              style={gradientStyle}
            ></div>
            <canvas
              ref={displayCanvasRef}
              width={1000}
              height={1000}
              className="absolute left-0 top-0 aspect-square h-full w-60 rounded-md mix-blend-overlay md:w-80"
            />
          </div>
          <div className="grid w-full flex-1 gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {colorStops.map((stop, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="relative flex w-full max-w-[40px] items-center gap-3">
                    <label
                      htmlFor={`color-${index}`}
                      className="text-lg font-bold"
                    >
                      <div
                        className="border-ali size-10 cursor-pointer rounded-full border-2"
                        style={{ backgroundColor: stop.color }}
                      />
                    </label>
                    <Input
                      className="absolute left-0 top-3 opacity-0"
                      type="color"
                      id={`color-${index}`}
                      value={stop.color}
                      onChange={(e) =>
                        updateColorStop(index, e.target.value, stop.position)
                      }
                    />
                  </div>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    value={stop.position}
                    onChange={(e) =>
                      updateColorStop(index, stop.color, Number(e.target.value))
                    }
                    className="w-16"
                  />
                  {colorStops.length > 2 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeColorStop(index)}
                    >
                      <DIcons.Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {colorStops.length < 5 && (
                <Button variant="outline" size="icon" onClick={addColorStop}>
                  <DIcons.Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Label className={!isRadialGradient ? "font-medium" : ""}>
                  Linear
                </Label>
                <Switch
                  id="gradient-type"
                  checked={isRadialGradient}
                  onCheckedChange={(checked) => setIsRadialGradient(checked)}
                />
                <Label className={isRadialGradient ? "font-medium" : ""}>
                  Radial
                </Label>
              </div>
              {!isRadialGradient && (
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
              )}
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
                    size="icon"
                    onClick={copyToClipboard}
                  >
                    <DIcons.Copy className="h-4 w-4" />
                  </Button>
                  <Button onClick={downloadJPG} className="">
                    Download JPG
                  </Button>
                  <Button
                    size="icon"
                    onClick={resetSettings}
                    variant="secondary"
                  >
                    <DIcons.RotateCw />
                  </Button>
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

export { Graaadients };
