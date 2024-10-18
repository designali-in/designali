import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract161: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-161";

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
            d="M188.78,62.49c-4.85-11.47-11.8-21.78-20.65-30.63-8.85-8.85-19.15-15.79-30.63-20.65-11.88-5.03-24.5-7.57-37.51-7.57s-25.63,2.55-37.51,7.57c-11.47,4.85-21.78,11.8-30.63,20.65-8.85,8.85-15.8,19.15-20.65,30.63-5.03,11.88-7.57,24.5-7.57,37.51s2.55,25.63,7.57,37.51c4.85,11.47,11.8,21.78,20.65,30.63,8.85,8.85,19.15,15.79,30.63,20.65,11.88,5.02,24.5,7.57,37.51,7.57s25.63-2.55,37.51-7.57c11.47-4.85,21.78-11.8,30.63-20.65,8.85-8.85,15.79-19.15,20.65-30.63,5.02-11.88,7.57-24.5,7.57-37.51s-2.55-25.63-7.57-37.51h0ZM8.9,100c0-24.34,9.48-47.21,26.68-64.42,17.21-17.21,40.08-26.68,64.42-26.68,22.56,0,43.87,8.15,60.57,23.05-7.56-2.03-16.72-2.21-27.13-.44-19.91,3.39-42.17,13.53-62.69,28.56-20.52,15.03-36.9,33.2-46.14,51.16-4.85,9.43-7.44,18.26-7.77,26.1-5.21-11.59-7.95-24.25-7.95-37.33h0ZM26.51,153.84c-3.36-4.59-4.82-10.42-4.34-17.33.49-6.93,2.88-14.63,7.12-22.87,8.87-17.25,24.7-34.76,44.57-49.32,19.87-14.56,41.35-24.37,60.47-27.62,4.46-.76,8.66-1.14,12.59-1.14s7.91.42,11.36,1.25c6.74,1.62,11.86,4.77,15.22,9.36,3.36,4.59,4.82,10.42,4.34,17.33-.49,6.93-2.88,14.63-7.12,22.87-8.87,17.25-24.7,34.76-44.57,49.32-19.88,14.56-41.35,24.37-60.47,27.62-9.14,1.56-17.19,1.52-23.95-.11-6.74-1.62-11.86-4.77-15.22-9.36h0ZM164.42,164.42c-17.21,17.21-40.08,26.68-64.42,26.68-22.56,0-43.87-8.15-60.57-23.05,4.08,1.1,8.63,1.65,13.6,1.65,4.22,0,8.75-.4,13.53-1.22,19.91-3.39,42.17-13.53,62.69-28.56,20.52-15.03,36.9-33.2,46.14-51.16,4.85-9.43,7.44-18.26,7.77-26.1,5.21,11.59,7.95,24.25,7.95,37.33,0,24.34-9.48,47.21-26.68,64.42h0Z"
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

Abstract161.displayName = "Abstract161";
export { Abstract161 };
