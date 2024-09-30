import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Moon1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-1";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M194.73,194.73c273.69,273.69-263.16,273.69,10.53,0-273.69,273.69-273.69-263.16,0,10.53-273.69-273.69,263.16-273.69-10.53,0,273.69-273.69,273.69,263.16,0-10.53Z"
          ></path>
        </mask>
      </g>
    </ShapeBase>
  );
});

Moon1.displayName = "Moon1";
export { Moon1 };
