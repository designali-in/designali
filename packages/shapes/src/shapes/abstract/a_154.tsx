import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract154: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-154";

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
            d="M191.1,103.41v-6.81h-36.52c-13.42-2.7-23.94-7.35-31.99-14.36l44.24-44.24-4.82-4.82-44.24,44.24c-7.02-8.05-11.66-18.57-14.36-31.99V8.9h-6.81v40.37c-2.84,11.84-7.37,21.26-13.92,28.59l-44.69-44.69-4.82,4.82,44.63,44.63c-7.99,6.8-18.36,11.32-31.53,13.97H8.9v6.81h41.22c11.6,2.78,20.88,7.18,28.14,13.51l-45.09,45.09,4.82,4.82,45.09-45.09c6.33,7.26,10.73,16.54,13.51,28.14v41.22h6.81v-37.38c2.65-13.17,7.17-23.54,13.97-31.53l44.63,44.63,4.82-4.82-44.69-44.69c7.33-6.55,16.75-11.07,28.59-13.92h40.37Z"
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

Abstract154.displayName = "Abstract154";
export { Abstract154 };
