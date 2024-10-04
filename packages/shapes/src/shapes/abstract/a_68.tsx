import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract68: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-68";

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
            d="M79.09,70.99h41.82l-20.91,36.31-20.91-36.31ZM188.7,31.76c-6.01-10.43-16.77-16.73-28.8-16.84l-76.97-.69h-.32c-12.08,0-22.9,6.23-29.01,16.71-6.15,10.57-6.18,23.21-.07,33.81l35.24,61.19c-2.71,2.85-6.46,4.45-10.49,4.45h-.07c-5.3-.02-10.02-2.8-12.63-7.42L27.7,55.8c-1.45-2.58-2.81-5.18-3.49-8.73-.99-5.48.97-10.36,4.22-16,2.96-5.13,7.98-9.27,13.78-11.36l13.72-4.93-15.83.15c-12.02.11-22.79,6.4-28.8,16.84-6.01,10.43-6.07,22.93-.15,33.42l37.88,67.17c6.01,10.65,16.89,17.05,29.1,17.1,12.18.06,23.14-6.24,29.25-16.84l35.24-61.19c3.84.94,7.11,3.41,9.12,6.94,2.63,4.61,2.59,10.1-.1,14.68l-39.08,66.47c-1.5,2.55-3.07,5.03-5.79,7.4-4.24,3.6-9.43,4.34-15.93,4.34-5.91,0-12-2.29-16.71-6.29l-11.1-9.42,8.03,13.65c6.11,10.38,16.93,16.58,28.95,16.58s22.84-6.2,28.95-16.58l39.08-66.47c6.2-10.54,6.28-23.19.23-33.81-6.06-10.63-16.97-16.97-29.17-16.97h-70.48c-1.1-3.8-.6-7.87,1.44-11.39,2.64-4.55,7.34-7.25,12.59-7.25h.14l76.97.69c2.95.02,5.88.14,9.29,1.33,5.23,1.88,8.47,6.02,11.72,11.66,2.96,5.13,4.02,11.56,2.92,17.65l-2.59,14.36,7.79-13.8c5.92-10.49,5.86-22.98-.15-33.42Z"
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

Abstract68.displayName = "Abstract68";
export { Abstract68 };
