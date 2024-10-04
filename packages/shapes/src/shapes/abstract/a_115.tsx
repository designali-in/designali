import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract115: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-115";

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
            d="M159.14,104.6h-54.54v54.54c0,2.54-2.05,4.6-4.59,4.6s-4.6-2.06-4.6-4.6v-54.54h-54.54c-2.54,0-4.59-2.06-4.59-4.6s2.05-4.6,4.59-4.6h54.54v-54.54c0-2.54,2.06-4.59,4.6-4.59s4.59,2.05,4.59,4.59v54.54h54.54c2.54,0,4.6,2.06,4.6,4.6s-2.06,4.6-4.6,4.6ZM162.06,37.94c-15.9-15.89-37.81-25.7-62.06-25.7s-46.17,9.82-62.06,25.7c-15.89,15.9-25.7,37.81-25.7,62.06s9.82,46.16,25.7,62.06c15.89,15.89,37.81,25.7,62.06,25.7s46.16-9.82,62.06-25.7c15.89-15.9,25.7-37.81,25.7-62.06s-9.82-46.16-25.7-62.06ZM100,196.96c-53.55,0-96.96-43.41-96.96-96.96S46.45,3.04,100,3.04s96.96,43.41,96.96,96.96-43.41,96.96-96.96,96.96Z"
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

Abstract115.displayName = "Abstract115";
export { Abstract115 };
