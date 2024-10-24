/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { Key } from "react";
import { useState } from "react";

import { shapes } from "../../../../../packages/shapes/src/index";
import ShapeGrid from "./shapeGrid";

export default function Landing() {
  const [isNoise, setNoise] = useState(true);
  const flowersKeys = Object.keys(shapes);
  const [shapeSize] = useState(120);
  const handleToggleChange = () => {
    setNoise(!isNoise);
  };

  return (
    <div className="mx-auto mb-20 max-w-7xl">
      <div className="">
        <div className="flex justify-center pb-10">
          <div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={!isNoise}
                onChange={handleToggleChange}
              />
              <div className="">
                <span>Noise</span>
              </div>
              <p>size: {shapeSize}</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center gap-3">
            {flowersKeys.map((shapeType) => {
              const shapesMeta = shapes[shapeType];
              return shapesMeta.map((_: never, i: Key) => {
                return (
                  <ShapeGrid
                    index={i}
                    type={shapeType}
                    noise={isNoise}
                    size={shapeSize}
                    key={i}
                  />
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
