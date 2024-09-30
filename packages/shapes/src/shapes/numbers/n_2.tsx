import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Number2: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-2";
  const maskId = `cs_mask_1_${shapeId}`;
  const clipId = `cs_clip_1_${shapeId}`;

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
            d="M97.37,97.37c136.84,136.84-131.58,136.84,5.27,0-136.84,136.84-136.84-131.58,0,5.27-136.84-136.84,131.58-136.84-5.27,0,136.84-136.84,136.84,131.58,0-5.27Z"
          ></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_radial_880_3312)"
            d="M200 0H0v200h200V0z"
          ></path>
          <path
            fill="url(#paint1_radial_880_3312)"
            d="M200 0H0v200h200V0z"
          ></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_880_3312"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF500"></stop>
          <stop offset="1" stopColor="#FF00D6" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_880_3312"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00D6"></stop>
          <stop offset="0.461" stopColor="#FF7171" stopOpacity="0.84"></stop>
          <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
        </radialGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number2.displayName = "Number2";
export { Number2 };
