"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { DesignPanel } from "./design-panel";

interface DesignParams {
  shape: "circle" | "square" | "triangle" | "hexagon" | "star" | "custom";
  density: number;
  isDarkMode: boolean;
  backgroundColor: string;
  foregroundColor: string;
  scale: number;
  rotation: number;
  customSvg: string | null;
}

const PatternGenerator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [designParams, setDesignParams] = useState<DesignParams>({
    shape: "circle",
    density: 0.5,
    isDarkMode: false,
    backgroundColor: "#ffffff",
    foregroundColor: "#000000",
    scale: 0.2,
    rotation: 0,
    customSvg: null,
  });

  useEffect(() => {
    generatePattern();
  }, [designParams]); //This line was already correct. No changes needed here.

  const generatePattern = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { shape, backgroundColor, foregroundColor, scale, rotation } =
      designParams;

    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = foregroundColor;
    const baseSize = Math.min(canvas.width, canvas.height) / 40;
    const shapeSize = baseSize * scale;
    const spacing = shapeSize * 2;

    for (let y = -spacing; y < canvas.height + spacing; y += spacing) {
      for (let x = -spacing; x < canvas.width + spacing; x += spacing) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        drawShape(ctx, shape, 0, 0, shapeSize);
        ctx.restore();
      }
    }
  };

  const drawShape = (
    ctx: CanvasRenderingContext2D,
    shape: string,
    x: number,
    y: number,
    size: number,
  ) => {
    if (shape === "custom" && designParams.customSvg) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
      };
      img.src = `data:image/svg+xml;base64,${btoa(designParams.customSvg)}`;
      return;
    }

    switch (shape) {
      case "circle":
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "square":
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.closePath();
        ctx.fill();
        break;
      case "hexagon":
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const px = x + (size / 2) * Math.cos(angle);
          const py = y + (size / 2) * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        break;
      case "star":
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const angle = (i * Math.PI) / 5;
          const radius = i % 2 === 0 ? size / 2 : size / 4;
          const px = x + radius * Math.cos(angle);
          const py = y + radius * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        break;
    }
  };

  const handleSvgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const svg = e.target?.result as string;
        setDesignParams((prev) => ({
          ...prev,
          customSvg: svg,
          shape: "custom",
        }));
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid SVG file.");
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "pattern.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  const defaultDesignParams: DesignParams = {
    shape: "circle",
    density: 0.5,
    isDarkMode: false,
    backgroundColor: "#ffffff",
    foregroundColor: "#000000",
    scale: 0.2,
    rotation: 0,
    customSvg: null,
  };

  const resetSettings = () => {
    setDesignParams(defaultDesignParams);
  };

  const randomizePattern = () => {
    const shapes: DesignParams["shape"][] = [
      "circle",
      "square",
      "triangle",
      "hexagon",
      "star",
    ];
    setDesignParams({
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      density: Math.random(), // Random density between 0 and 1
      isDarkMode: Math.random() > 0.5, // Random true/false
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
      foregroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
      scale: Math.random() * 5, // Random scale between 0 and 5
      rotation: Math.random() * 360, // Random rotation between 0 and 360 degrees
      customSvg: null, // Keep null unless a custom SVG is used
    });
  };

  return (
    <div
      className={`mx-auto mt-10 flex h-full max-w-7xl overflow-scroll rounded-3xl border bg-background p-3 shadow-xl`}
    >
      <DesignPanel
        resetButton={resetSettings}
        onRandomize={randomizePattern} // Pass function
        {...designParams}
        rotation={0}
        {...designParams}
        onUpdateShape={(shape) =>
          setDesignParams((prev) => ({ ...prev, shape }))
        }
        onUpdateDensity={(density) =>
          setDesignParams((prev) => ({ ...prev, density }))
        }
        onToggleDarkMode={(isDarkMode) =>
          setDesignParams((prev) => ({ ...prev, isDarkMode }))
        }
        onUpdateBackgroundColor={(backgroundColor) =>
          setDesignParams((prev) => ({ ...prev, backgroundColor }))
        }
        onUpdateForegroundColor={(foregroundColor) =>
          setDesignParams((prev) => ({ ...prev, foregroundColor }))
        }
        onUpdateScale={(scale) =>
          setDesignParams((prev) => ({ ...prev, scale }))
        }
        onUpdateRotation={(rotation) =>
          setDesignParams((prev) => ({ ...prev, rotation }))
        }
        onSvgUpload={handleSvgUpload}
        onDownload={handleDownload}
      />
      <main className="flex-1">
        <canvas
          ref={canvasRef}
          className="h-[800px] w-full rounded-r-lg"
          style={{ backgroundColor: designParams.backgroundColor }}
        />
      </main>
    </div>
  );
};

export default PatternGenerator;
