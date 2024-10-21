import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower31: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-31";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="186"
          x="0"
          y="7"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.99,100c0-9.02-8.49-16.68-20.32-19.47,8.84-8.33,12.37-19.21,7.86-27.02-4.51-7.81-15.7-10.2-27.33-6.7,3.49-11.64,1.11-22.82-6.7-27.33-7.81-4.51-18.69-.98-27.02,7.86-2.79-11.83-10.45-20.32-19.47-20.32s-16.68,8.49-19.47,20.32c-8.33-8.84-19.21-12.37-27.02-7.86-7.81,4.51-10.2,15.7-6.7,27.33-11.64-3.49-22.82-1.11-27.33,6.7-4.51,7.81-.98,18.69,7.86,27.02-11.83,2.79-20.32,10.45-20.32,19.47s8.49,16.68,20.32,19.47c-8.84,8.33-12.37,19.21-7.86,27.02,4.51,7.81,15.7,10.2,27.33,6.7-3.49,11.64-1.11,22.82,6.7,27.33,7.81,4.51,18.69.98,27.02-7.86,2.79,11.83,10.45,20.32,19.47,20.32s16.68-8.49,19.47-20.32c8.33,8.84,19.21,12.37,27.02,7.86,7.81-4.51,10.2-15.7,6.7-27.33,11.64,3.49,22.82,1.11,27.33-6.7,4.51-7.81.98-18.69-7.86-27.02,11.83-2.79,20.32-10.45,20.32-19.47ZM116.29,128.22c-3.03,1.75-5.24,4.51-6.61,7.9-2.89-2.26-6.18-3.54-9.68-3.54s-6.79,1.28-9.68,3.54c-1.37-3.4-3.58-6.15-6.61-7.9-3.03-1.75-6.52-2.29-10.15-1.78.51-3.63-.03-7.12-1.78-10.15-1.75-3.03-4.51-5.24-7.9-6.61,2.26-2.89,3.54-6.18,3.54-9.68s-1.28-6.79-3.54-9.68c3.4-1.37,6.15-3.58,7.9-6.61,1.75-3.03,2.29-6.52,1.78-10.15,3.63.51,7.12-.03,10.15-1.78,3.03-1.75,5.24-4.51,6.61-7.9,2.89,2.26,6.18,3.54,9.68,3.54s6.79-1.28,9.68-3.54c1.37,3.4,3.58,6.15,6.61,7.9,3.03,1.75,6.52,2.29,10.15,1.78-.51,3.63.03,7.12,1.78,10.15,1.75,3.03,4.51,5.24,7.9,6.61-2.26,2.89-3.54,6.18-3.54,9.68s1.28,6.79,3.54,9.68c-3.4,1.37-6.15,3.58-7.9,6.61-1.75,3.03-2.29,6.52-1.78,10.15-3.63-.51-7.12.03-10.15,1.78Z"
          ></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4711)"
            d="M200 0H0v200h200V0z"
          ></path>
          <g filter="url(#filter0_f_748_4711)">
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
          id="filter0_f_748_4711"
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
            result="effect1_foregroundBlur_748_4711"
            stdDeviation="27.5"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4711"
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

Flower31.displayName = "Flower31";
export { Flower31 };
