import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract186: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-186";

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
            clipRule="evenodd"
            d="M100,5.51C50.14,5.51,9.57,46.08,9.57,95.95s40.57,90.43,90.43,90.43,90.43-40.57,90.43-90.43S149.86,5.51,100,5.51ZM100,181.42c-47.13,0-85.47-38.34-85.47-85.47S52.87,10.47,100,10.47s85.48,38.34,85.48,85.47-38.34,85.47-85.48,85.47Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,17.9c-43.03,0-78.04,35.01-78.04,78.04s35.01,78.05,78.04,78.05,78.05-35.01,78.05-78.05S143.03,17.9,100,17.9ZM100,169.03c-40.3,0-73.09-32.79-73.09-73.09S59.7,22.86,100,22.86s73.09,32.79,73.09,73.09-32.79,73.09-73.09,73.09Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.24,76.19c-26.13,26.13-37.91,55.27-26.83,66.35,2.81,2.81,6.78,4.21,11.68,4.21s10.53-1.36,16.92-4.09c12.15-5.19,25.56-14.76,37.76-26.96,26.13-26.12,37.91-55.27,26.83-66.35-11.08-11.08-40.23.7-66.35,26.83ZM116.26,112.2c-11.76,11.76-24.61,20.96-36.2,25.9-10.72,4.58-19.15,4.91-23.14.93-7.85-7.85,1.06-33.57,26.83-59.34,19.74-19.74,39.45-29.59,51.12-29.59,3.57,0,6.38.92,8.22,2.76,7.85,7.85-1.06,33.57-26.83,59.34Z"
          />
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

Abstract186.displayName = "Abstract186";
export { Abstract186 };
