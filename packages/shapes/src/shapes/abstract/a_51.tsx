import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract51: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-51";

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
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M101.47,170.52c0-28.6,11.56-48.9,34.36-60.34,17.12-8.59,34.51-8.71,34.69-8.71v69.05h-69.05ZM29.48,134.33v-32.86c.18,0,17.57.12,34.69,8.71,22.79,11.44,34.36,31.74,34.36,60.34h-32.86c-19.99,0-36.19-16.2-36.19-36.19ZM98.53,29.48c0,28.6-11.56,48.9-34.36,60.34-17.12,8.59-34.51,8.71-34.69,8.71V29.48h69.05ZM170.52,65.67v32.86c-.18,0-17.57-.12-34.69-8.71-22.79-11.44-34.36-31.74-34.36-60.34h32.86c19.98,0,36.19,16.2,36.19,36.19ZM3.04,3.04v193.92h193.92V3.04H3.04Z"
            clipRule="evenodd"
          ></path>
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

Abstract51.displayName = "Abstract51";
export { Abstract51 };
