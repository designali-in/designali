import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract117: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-117";

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
            points="114.4 96.1 192.59 55.15 189.04 48.36 110.72 89.38 155.87 11.18 149.24 7.35 103.83 86 103.83 2.48 96.17 2.48 96.17 85.78 50.89 7.35 44.26 11.18 89.4 89.38 11.09 48.36 7.54 55.15 85.72 96.1 5.96 96.1 5.96 96.24 5.96 103.76 5.96 103.9 85.6 103.9 7.41 144.85 10.96 151.64 89.28 110.62 44.13 188.82 50.76 192.65 96.17 114 96.17 197.52 103.83 197.52 103.83 114.22 149.11 192.65 155.74 188.82 110.59 110.62 188.91 151.64 192.46 144.85 114.28 103.9 194.04 103.9 194.04 103.76 194.04 96.24 194.04 96.1 114.4 96.1"
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

Abstract117.displayName = "Abstract117";
export { Abstract117 };
