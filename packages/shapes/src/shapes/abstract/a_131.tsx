import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract131: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-131";

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
            d="M114.34,11.28v73.58h74.22c-6.45-37.65-36.66-67.52-74.22-73.58ZM106.28,92.93V2.27c47.54,2.95,87.05,40.29,91.26,89.27.07.44.07.95.07,1.39h-91.32ZM114.34,188.75c38.4-6.22,68.69-36.93,74.47-75.18h-74.47v75.18ZM108.41,197.6c-.69.07-1.44.13-2.13.13v-92.23h91.45c-2.57,47.91-40.13,87.89-89.31,92.1ZM85.66,113.57H11.17c5.79,38.31,36.35,69,74.49,75.15v-75.15ZM2.46,108.45c-.07-1.01-.19-2.01-.19-2.96h91.45v92.23C46.17,194.77,6.67,157.43,2.46,108.45ZM85.66,11.24C47.45,17.33,17.79,46.85,11.41,84.86h74.25V11.24ZM2.33,92.93C5.72,45.71,42.97,6.54,91.59,2.4c.69-.06,1.44-.12,2.13-.12v90.66H2.33Z"
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

Abstract131.displayName = "Abstract131";
export { Abstract131 };
