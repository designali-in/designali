"use client";

import { FC, useState } from "react";
import { ColorInfo } from "@/types";

import ColorList from "./color-list";
import Uploader from "./uploader";

const ImageColorPallate: FC = () => {
  const [colorPalette, setColorPalette] = useState<ColorInfo[] | null>(null);

  const onImageSelect = (colors: ColorInfo[]): void => {
    setColorPalette(colors);
  };

  return (
    <section className="grid justify-center">
      <Uploader onImageSelect={onImageSelect} />
      <ColorList colorPalette={colorPalette} />
    </section>
  );
};

export default ImageColorPallate;
