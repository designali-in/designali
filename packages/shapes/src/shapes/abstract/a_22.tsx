import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract22: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-22";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <polygon
            fill="#fff"
            fillRule="evenodd"
            points="193.21 85.05 193.21 81.3 145.14 81.3 181.78 44.66 155.34 18.22 118.7 54.86 118.7 3.04 81.3 3.04 81.3 54.86 44.66 18.22 18.22 44.66 54.86 81.3 3.04 81.3 3.04 118.7 54.86 118.7 18.22 155.34 44.66 181.78 81.3 145.14 81.3 196.96 118.7 196.96 118.7 145.14 155.34 181.78 181.78 155.34 145.14 118.7 196.96 118.7 196.96 81.3 193.21 81.3 193.21 85.05 189.46 85.05 189.46 111.2 127.03 111.2 171.17 155.34 155.34 171.17 111.2 127.03 111.2 189.46 88.8 189.46 88.8 127.03 44.66 171.17 28.83 155.34 72.97 111.2 10.54 111.2 10.54 88.8 72.97 88.8 28.83 44.66 44.66 28.83 88.8 72.98 88.8 10.54 111.2 10.54 111.2 72.98 155.34 28.83 171.17 44.66 127.02 88.8 193.21 88.8 193.21 85.05 189.46 85.05 193.21 85.05"
            clipRule="evenodd"
          ></polygon>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4808)"
            d="M200 0H0v200h200V0z"
          ></path>
          <g filter="url(#filter0_f_748_4808)">
            <path fill="#FF58E4" d="M130 0H69v113h61V0z"></path>
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h114V91z"
            ></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M113 80H28v120h85V80z"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4808"
          width="278"
          height="310"
          x="-27"
          y="-55"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4808"
            stdDeviation="27.5"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4808"
          x1="186.5"
          x2="37"
          y1="37"
          y2="186.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
          <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Abstract22.displayName = "Abstract22";
export { Abstract22 };
