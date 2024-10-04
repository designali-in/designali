import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract160: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-160";

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
            d="M38.94,100H4.55C4.55,47.34,47.28,4.65,100,4.65v34.36c-33.72,0-61.06,27.3-61.06,60.99ZM100,195.35v-34.36c33.72,0,61.06-27.31,61.06-61h34.39c0,52.66-42.73,95.35-95.45,95.35ZM100,100v-60.99c33.72,0,61.06,27.3,61.06,60.99h-61.06ZM38.94,100h61.06v61c-33.72,0-61.06-27.31-61.06-61ZM100,6.18C48.21,6.18,6.09,48.27,6.09,100.01s42.12,93.81,93.91,93.81,93.91-42.09,93.91-93.81S151.78,6.18,100,6.18ZM100,196.89c-53.47,0-96.98-43.46-96.98-96.88S46.52,3.11,100,3.11s96.98,43.47,96.98,96.89-43.5,96.88-96.98,96.88Z"
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

Abstract160.displayName = "Abstract160";
export { Abstract160 };
