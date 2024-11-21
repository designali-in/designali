"use client";

// @ts-ignore
import { useEffect, useState } from "react";
import { DIcons } from "dicons";

import { Button } from "@/components/ui/button";

import {
  Dshapes,
  getRandomShape,
  shapes,
} from "../../../../../packages/shapes/src/index";
import { Dropdown } from "../uis/dropdown";
import { DInput } from "../uis/input";

export default function Editor({ initialShape }) {
  const [shape, setShape] = useState(initialShape);
  const [noise, setNoise] = useState(false);
  return (
    <section className="grid justify-center py-10">
      <div className="flex justify-center">
        <Dshapes
          className=""
          size={300}
          index={shape.index}
          type={shape.shapeType}
          noise={noise}
        />
      </div>

      <div className="mt-10 flex gap-3">
        <Dropdown
          // @ts-ignore
          text={shape.shapeType}
          items={Object.keys(shapes)}
          value={shape.shapeType}
          onChange={(type) => {
            const maxShapes = shapes[type].length - 1;
            const index = shape.index > maxShapes ? maxShapes : shape.index;
            setShape({ index, shapeType: type });
          }}
        />

        <div className={""}>
          <div className="flex items-center gap-2">
            <p className="text-slate-600 dark:text-slate-400">Index</p>
            <DInput
              value={shape.index}
              onChange={(value) => {
                let index = Number(value);
                console.log(index);
                if (typeof index !== "number" || isNaN(index)) {
                  return;
                }
                let maxShapes = shapes[shape.shapeType].length;
                if (value < 0) {
                  index = maxShapes - 1;
                }
                if (value > maxShapes - 1) {
                  index = maxShapes - 1;
                }
                if (value == maxShapes - 1) {
                  index = 0;
                }
                setShape({ ...shape, index: index });
              }}
            />
          </div>
        </div>

        <Button
          size="icon"
          variant="outline"
          className="h-10 w-10"
          onClick={() => {
            setShape(getRandomShape({ onlyId: true }));
          }}
        >
          <DIcons.Shuffle strokeWidth={1} className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
