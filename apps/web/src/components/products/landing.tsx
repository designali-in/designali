/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useEffect, useState } from "react";
import { shapes } from "dshapes";

import ShapeGrid from "./shapeGrid";

export default function Landing() {
  const [isNoise, setNoise] = useState(true);
  const coolshapeskeys = Object.keys(shapes).flat();
  const [shapeSize, setShapeSize] = useState(140);
  const handleToggleChange = () => {
    setNoise(!isNoise);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update itemsPerRow based on screen size
      if (window.innerWidth >= 768) {
        // Desktop view
        setShapeSize(140);
      } else {
        // Mobile view
        setShapeSize(120);
      }
    };

    // Attach the event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial call to set itemsPerRow based on the initial screen size
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount
  return (
    <div className="mx-auto mb-20 max-w-7xl">
      <div className="">
        <div className="flex justify-center py-10">
          <div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="h-5 w-5"
                checked={!isNoise}
                onChange={handleToggleChange}
              />
              <div className="">
                <span>Noise</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center gap-3">
            {coolshapeskeys.map((shapeType) => {
              const shapesMeta = shapes[shapeType];
              return shapesMeta.map((_, i) => {
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
