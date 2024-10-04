import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract113: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-113";

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
            d="M191.29,52.93c.18,1.58.28,3.18.28,4.81,0,22.62-18.02,40.96-40.24,40.96s-40.24-18.34-40.24-40.96c0-18.1,11.53-33.44,27.52-38.86-21.93,3.8-38.62,23.23-38.62,46.63,0,14.61,6.51,27.68,16.73,36.36-10.84-4.32-22.67-4.24-33.18-.25,10.06-8.68,16.45-21.63,16.45-36.11,0-23.41-16.7-42.83-38.62-46.63,15.99,5.42,27.52,20.76,27.52,38.86,0,22.62-18.02,40.96-40.24,40.96S8.42,80.36,8.42,57.73c0-1.63.1-3.23.28-4.81-1.08,4.01-1.67,8.22-1.67,12.58,0,26.13,20.81,47.32,46.48,47.32,5.7,0,11.16-1.05,16.21-2.96-3.43,2.97-6.5,6.5-9.05,10.56-12.4,19.71-8.63,45.23,7.83,60.47-10.6-13.34-12.18-32.6-2.59-47.84,11.98-19.05,36.87-24.61,55.58-12.41,18.71,12.2,24.17,37.53,12.19,56.59-.86,1.37-1.8,2.66-2.79,3.89,3.03-2.78,5.76-6,8.07-9.67,12.78-20.32,8.39-46.82-9.37-61.86,5.24,2.08,10.93,3.22,16.89,3.22,25.67,0,46.48-21.19,46.48-47.32,0-4.36-.59-8.57-1.67-12.58Z"
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

Abstract113.displayName = "Abstract113";
export { Abstract113 };
