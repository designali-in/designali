import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract127: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-127";

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
            d="M188.12,140.6c-7.4-7.45-17.31-9.79-26.26-7.73-8,1.84-16.39.89-23.2-3.7l-15.46-10.41c-8.69-5.84-13.89-15.65-13.89-26.15v-9.53c0-8.64,3.49-16.93,9.78-22.81,6.75-6.32,10.39-15.93,8.33-26.3-2.14-10.72-10.72-19.44-21.39-21.67-18.09-3.79-34.02,9.97-34.02,27.46,0,8.15,3.47,15.48,9.01,20.61,6.51,6.03,9.68,14.89,9.68,23.77v8.48c0,10.5-5.21,20.3-13.89,26.15l-15.45,10.41c-6.82,4.6-15.21,5.54-23.22,3.7-8.95-2.06-18.87.28-26.27,7.75-7.68,7.75-10.12,19.76-6.02,29.89,6.94,17.19,27.21,22.8,41.68,13.05,6.75-4.54,10.88-11.52,12.04-18.99,1.35-8.78,6.92-16.36,14.27-21.32l8.67-5.84c10.58-7.13,24.41-7.13,34.99,0l8.67,5.84c7.36,4.96,12.92,12.53,14.27,21.32,1.15,7.47,5.28,14.44,12.03,18.99,14.47,9.76,34.75,4.14,41.69-13.06,4.09-10.14,1.66-22.15-6.04-29.89Z"
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

Abstract127.displayName = "Abstract127";
export { Abstract127 };
