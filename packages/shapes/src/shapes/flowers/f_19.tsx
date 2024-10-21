import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower19: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-19";

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
            d="M166.99,100c0-12.44,39.78-34.23,20.93-36.42-.63.8-1.41,1.67-2.38,2.64-18.09,18.09-61.53,42.04-78.63,30.92,4.24-19.96,51.89-33.74,77.47-33.74,1.36,0,2.53.06,3.54.18,11.78-14.87-31.76-2.16-40.55-10.95-8.79-8.79,3.92-52.33-10.95-40.55.12,1.01.18,2.18.18,3.54,0,25.58-13.78,73.23-33.74,77.47-11.11-17.11,12.84-60.55,30.92-78.63.96-.96,1.84-1.75,2.63-2.38-2.19-18.85-23.98,20.93-36.42,20.93S65.77-6.77,63.58,12.08c.8.63,1.67,1.41,2.63,2.38,18.09,18.09,42.04,61.53,30.92,78.63-19.96-4.24-33.74-51.89-33.74-77.47,0-1.36.06-2.53.18-3.54-14.87-11.78-2.16,31.76-10.95,40.55-8.79,8.79-52.33-3.92-40.55,10.95,1.01-.12,2.18-.18,3.55-.18,25.58,0,73.23,13.78,77.47,33.74-17.11,11.11-60.55-12.84-78.63-30.92-.96-.96-1.75-1.84-2.38-2.64-18.85,2.19,20.93,23.98,20.93,36.42s-39.78,34.23-20.93,36.42c.63-.8,1.41-1.67,2.38-2.63,18.09-18.09,61.53-42.04,78.63-30.92-4.24,19.96-51.89,33.74-77.47,33.74-1.36,0-2.53-.06-3.54-.18-11.78,14.87,31.76,2.16,40.55,10.95,8.79,8.79-3.92,52.33,10.95,40.55-.12-1.01-.18-2.18-.18-3.55,0-25.58,13.78-73.23,33.74-77.47,11.11,17.11-12.84,60.55-30.92,78.63-.96.96-1.84,1.75-2.63,2.38,2.19,18.85,23.98-20.93,36.42-20.93s34.23,39.78,36.42,20.93c-.8-.63-1.67-1.41-2.63-2.38-18.09-18.09-42.04-61.53-30.92-78.63,19.96,4.24,33.74,51.89,33.74,77.47,0,1.36-.06,2.53-.18,3.55,14.87,11.78,2.16-31.76,10.95-40.55,8.79-8.79,52.33,3.92,40.55-10.95-1.01.12-2.18.18-3.54.18-25.58,0-73.23-13.78-77.47-33.74,17.11-11.11,60.55,12.84,78.63,30.92.96.96,1.75,1.84,2.38,2.63,18.85-2.19-20.93-23.98-20.93-36.42Z"
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

Flower19.displayName = "Flower19";
export { Flower19 };
