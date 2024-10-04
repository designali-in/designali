import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract10: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-10";

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
            d="M195,74.54c-8.11,30.29-39.25,48.26-69.54,40.15-9.99-2.68-18.64-7.86-25.46-14.69,18.93-5.08,34.71-19.85,40.15-40.15,5.44-20.3-.85-40.98-14.7-54.85,9.32-2.51,19.4-2.66,29.39.01,30.29,8.12,48.27,39.24,40.15,69.53ZM195.01,154.84c-8.12,30.29-39.25,48.26-69.55,40.14-30.29-8.11-48.27-39.24-40.15-69.53,2.67-9.99,7.86-18.64,14.69-25.45,5.08,18.93,19.86,34.71,40.15,40.15,20.31,5.44,40.98-.84,54.86-14.7,2.5,9.32,2.66,19.4-.01,29.39ZM59.85,140.15c-5.44,20.3.84,40.98,14.7,54.85-9.32,2.51-19.4,2.66-29.39-.01C14.86,186.87-3.12,155.75,5,125.46c8.12-30.29,39.25-48.26,69.55-40.15,9.99,2.67,18.64,7.86,25.46,14.69-18.93,5.08-34.72,19.85-40.15,40.15ZM114.69,74.55c-2.67,9.99-7.86,18.64-14.69,25.45-5.09-18.93-19.86-34.71-40.16-40.14-20.3-5.45-40.98.84-54.86,14.69-2.51-9.32-2.66-19.4.01-29.39C13.11,14.87,44.24-3.1,74.54,5.02c30.29,8.11,48.27,39.24,40.15,69.53Z"
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

Abstract10.displayName = "Abstract10";
export { Abstract10 };
