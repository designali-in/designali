import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract41: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-41";

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
            d="M140.45,94.2c-12.8-13.94-33.51-20.19-51.95-15.74,12.32-29.42,54.67-37.2,76.63-13.84,22.17,20.66,16.4,61.24-10.46,74.92,2.53-16.55-3.05-33.65-14.23-45.34ZM122.08,89.17c15.84,8,26.12,24.23,26.11,42.36.36,25.72-21.84,48.01-47.88,47.38-18.66-.22-34.78-11.05-42.45-27.34,36.27,8.03,71.2-26.2,64.23-62.41ZM90.55,121.76c6.02,1.16,12.63,1.29,18.7.31-14.32,26.25-53.77,31.47-74.41,9.56-22.93-21.22-15.85-63.72,13.03-76.26-7.71,29.57,12.84,61.23,42.68,66.39ZM78.48,110.07c-15.28-8.2-25.07-24.08-25.07-41.81-.1-48.05,64.58-65.33,88.47-23.64-37.4-8.16-72.7,28.6-63.4,65.45ZM100,3.81C46.88,3.81,3.81,46.87,3.81,100s43.06,96.19,96.19,96.19,96.19-43.07,96.19-96.19S153.12,3.81,100,3.81Z"
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

Abstract41.displayName = "Abstract41";
export { Abstract41 };
