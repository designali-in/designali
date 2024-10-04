import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract71: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-71";

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
            d="M161.12,62.51c1.66-21.75-3.82-39-16.58-45.82-19.17-10.25-48.79,6.23-72.39,37.91C33.22,61.28,5.1,80.22,5.55,101.94c.3,14.46,13.19,27.17,33.33,35.55-1.66,21.75,3.82,39,16.58,45.82,19.17,10.25,48.79-6.23,72.39-37.91,38.94-6.68,67.05-25.62,66.6-47.34-.3-14.46-13.19-27.17-33.33-35.55ZM138.71,17.8c10.59,5.66,14.57,21.11,12.33,41.08-14.99-4.67-32.87-7.2-52.03-6.8-8.02.17-15.8.84-23.22,1.94,21.76-29.02,47.23-44.6,62.92-36.22ZM7.63,97.28c-.37-18.07,25.89-33.93,62.53-39.96-4.42,6.18-8.6,12.9-12.44,20.08-9.14,17.1-15.03,34.4-17.61,50.03-19.65-7.05-32.22-17.83-32.48-30.15ZM52.41,179.21c-10.62-5.68-14.59-21.19-12.32-41.23,16.55,6.65,37.8,10.42,60.89,9.95,3.7-.08,7.35-.26,10.94-.55-20.96,26.18-44.64,39.78-59.52,31.83ZM121.36,134.46c-6.85.87-14.02,1.41-21.39,1.56-22.06.45-42.37-2.6-58.29-8.04,3.01-15.01,9.07-31.83,18.05-48.63,4.35-8.14,9.09-15.71,14.05-22.59,7.79-1.12,16.01-1.81,24.52-1.99,19.47-.4,37.56,1.93,52.49,6.22-2.23,16.89-8.77,36.79-19.39,56.67-3.16,5.92-6.53,11.53-10.04,16.79ZM137.04,131.76c1.81-2.96,3.56-6.02,5.24-9.16,10.77-20.14,17.02-40.55,18.68-58.18,18.03,7.05,29.43,17.37,29.67,29.09.34,16.56-21.7,31.27-53.59,38.25Z"
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

Abstract71.displayName = "Abstract71";
export { Abstract71 };
