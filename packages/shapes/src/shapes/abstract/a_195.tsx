import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract195: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-195";

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
            d="M196.25,179.83c-12.96-11.23-24.43-22.05-34.54-32.63.77-1.51,1.54-3.02,2.21-4.59,3.62-8.55,5.45-17.64,5.45-27s-1.83-18.45-5.45-27c-3.49-8.26-8.49-15.68-14.87-22.05-6.37-6.37-13.79-11.37-22.05-14.87-7.35-3.11-15.11-4.82-23.09-5.26-1.96-10.2-2.91-20.62-2.91-31.41h-2c0,10.79-.96,21.22-2.91,31.41-7.98.44-15.73,2.15-23.09,5.26-8.26,3.49-15.68,8.49-22.05,14.87-6.37,6.37-11.37,13.79-14.87,22.05-3.62,8.55-5.45,17.64-5.45,27s1.83,18.45,5.45,27c.66,1.57,1.43,3.08,2.21,4.59-10.11,10.58-21.58,21.41-34.54,32.63l.66.76.66.76c13.05-11.3,25.37-20.21,37.36-27.02,2.49,3.69,5.33,7.14,8.52,10.33,6.37,6.37,13.79,11.37,22.05,14.87,8.55,3.62,17.64,5.45,27,5.45s18.45-1.83,27-5.45c8.26-3.49,15.68-8.49,22.05-14.87,3.19-3.19,6.03-6.64,8.52-10.33,11.99,6.81,24.32,15.72,37.36,27.02l1.31-1.51h0ZM146.92,68.69c12.53,12.53,19.44,29.2,19.44,46.92,0,10.32-2.4,20.24-6.83,29.24-30.55-32.53-48.02-62.86-54.95-95.37,16,1.09,30.9,7.77,42.34,19.21h0ZM33.64,115.61c0-17.73,6.9-34.39,19.44-46.92,11.44-11.44,26.35-18.13,42.34-19.21-6.93,32.51-24.4,62.84-54.95,95.37-4.43-8.99-6.83-18.92-6.83-29.24h0ZM146.92,162.53c-12.53,12.53-29.2,19.44-46.92,19.44s-34.39-6.9-46.92-19.44c-2.99-2.99-5.64-6.24-7.98-9.66,2.91-1.58,5.81-3.08,8.69-4.42,15.82-7.35,30.93-10.92,46.22-10.92s30.4,3.57,46.22,10.92c2.88,1.34,5.78,2.84,8.69,4.42-2.33,3.42-4.98,6.67-7.98,9.66h0Z"
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

Abstract195.displayName = "Abstract195";
export { Abstract195 };
