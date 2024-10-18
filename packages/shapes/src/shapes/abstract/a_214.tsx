import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract214: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-214";

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
            clipRule="evenodd"
            d="M22.89,82.4c9.49,0,17.3-7.17,18.31-16.4h26.06c1.05,16.76,15.02,30.08,32.04,30.08s30.99-13.32,32.04-30.08h26.06c1.01,9.22,8.82,16.4,18.31,16.4,10.18,0,18.43-8.25,18.43-18.43s-8.25-18.43-18.43-18.43c-9.49,0-17.3,7.17-18.31,16.39h-26.07c-1.05-16.76-15.02-30.08-32.04-30.08s-30.99,13.32-32.04,30.08h-26.07c-1.01-9.22-8.82-16.39-18.31-16.39-10.18,0-18.43,8.25-18.43,18.43s8.25,18.43,18.43,18.43ZM99.31,35.92c15.47,0,28.05,12.58,28.05,28.05s-12.58,28.05-28.05,28.05-28.05-12.58-28.05-28.05,12.58-28.05,28.05-28.05Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.73,119.55c-10.6,0-19.34,8.1-20.36,18.43h-26.06c-1.05-15.66-14.07-28.05-30-28.05s-28.96,12.38-30,28.05h-26.06c-1.02-10.33-9.76-18.43-20.36-18.43-11.28,0-20.46,9.18-20.46,20.46s9.18,20.46,20.46,20.46c10.6,0,19.33-8.1,20.36-18.43h26.06c1.05,15.66,14.08,28.05,30,28.05s28.96-12.38,30-28.05h26.06c1.02,10.33,9.76,18.43,20.36,18.43,11.28,0,20.46-9.18,20.46-20.46s-9.18-20.46-20.46-20.46h0ZM22.89,156.4c-9.04,0-16.4-7.35-16.4-16.4s7.35-16.4,16.4-16.4,16.39,7.35,16.39,16.39c0,0,0,0,0,0s0,0,0,0c0,9.04-7.36,16.38-16.39,16.38ZM175.73,156.4c-9.04,0-16.39-7.35-16.39-16.38,0,0,0,0,0,0s0,0,0,0c0-9.04,7.36-16.39,16.39-16.39s16.4,7.35,16.4,16.4-7.35,16.4-16.4,16.4Z"
          />
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

Abstract214.displayName = "Abstract214";
export { Abstract214 };
