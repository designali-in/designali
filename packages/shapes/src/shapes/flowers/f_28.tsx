import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower28: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-28";

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
            d="M192.99,87.98c0-20.49-16.61-37.09-37.09-37.09-7.55,0-14.56,2.26-20.42,6.13,1.04-3.43,1.61-7.06,1.61-10.83,0-20.49-16.61-37.09-37.09-37.09s-37.09,16.61-37.09,37.09c0,3.77.57,7.4,1.61,10.83-5.86-3.87-12.87-6.13-20.42-6.13-20.49,0-37.09,16.61-37.09,37.09s15.55,36.02,35.13,37.04c-8.36,6.8-13.71,17.17-13.71,28.79,0,20.49,16.61,37.09,37.09,37.09,15.66,0,29.04-9.7,34.48-23.42,5.44,13.72,18.82,23.42,34.48,23.42,20.49,0,37.09-16.61,37.09-37.09,0-11.62-5.35-21.98-13.71-28.79,19.57-1.02,35.13-17.21,35.13-37.04ZM100,138.31c-18.69,0-33.85-15.15-33.85-33.85s15.15-33.85,33.85-33.85,33.85,15.15,33.85,33.85-15.15,33.85-33.85,33.85Z"
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

Flower28.displayName = "Flower28";
export { Flower28 };
