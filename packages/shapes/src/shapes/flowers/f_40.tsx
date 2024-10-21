import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower40: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-40";

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
            d="M157.43,104.17c-3.79-2.19-7.91-3.49-12.09-4.17,4.18-.68,8.3-1.98,12.09-4.17,19.69-11.37,30.04-30.32,23.1-42.33-6.93-12.01-28.52-12.53-48.21-1.16-3.79,2.19-6.98,5.11-9.65,8.39,1.5-3.96,2.44-8.17,2.44-12.55,0-22.74-11.24-41.17-25.11-41.17s-25.11,18.43-25.11,41.17c0,4.38.93,8.59,2.44,12.55-2.68-3.28-5.86-6.2-9.65-8.39-19.69-11.37-41.28-10.85-48.21,1.16-6.93,12.01,3.41,30.96,23.1,42.33,3.79,2.19,7.91,3.49,12.09,4.17-4.18.68-8.3,1.98-12.09,4.17-19.69,11.37-30.04,30.32-23.1,42.33,6.93,12.01,28.52,12.53,48.21,1.16,3.79-2.19,6.98-5.11,9.65-8.39-1.5,3.96-2.44,8.17-2.44,12.55,0,22.74,11.24,41.17,25.11,41.17s25.11-18.43,25.11-41.17c0-4.38-.93-8.59-2.44-12.55,2.68,3.28,5.86,6.2,9.65,8.39,19.69,11.37,41.28,10.85,48.21-1.16,6.93-12.01-3.41-30.96-23.1-42.33ZM100,126.78c-14.79,0-26.78-11.99-26.78-26.78s11.99-26.78,26.78-26.78,26.78,11.99,26.78,26.78-11.99,26.78-26.78,26.78Z"
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

Flower40.displayName = "Flower40";
export { Flower40 };
