import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract30: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-30";

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
            d="M178.03,149.54c23.85-30.04,7.37-57.34-7.91-58.54-12.06-.96-16.3,11.7-17.37,17.83-3.18,18.24-3.74,53.04-18.46,71.75-14.73,18.71-42.65,16.29-42.65,16.29,36.5-4.62,35.39-49.52,38.25-66.91,2.86-17.39,4.95-39.84,25.61-45.67,43.65-12.32,42.76,49.3,22.53,65.25ZM49.65,179.61c30,23.88,57.26,7.38,58.47-7.92.96-12.08-11.68-16.32-17.8-17.39-18.23-3.19-52.98-3.74-71.67-18.48C-.03,121.06,2.39,93.11,2.39,93.11c4.62,36.53,49.46,35.44,66.83,38.3,17.37,2.86,39.79,4.95,45.61,25.64,12.31,43.7-49.24,42.81-65.18,22.56ZM68.3,70.04c-2.86,17.39-4.95,39.84-25.61,45.67C-.96,128.04-.06,66.41,20.16,50.46c-23.85,30.04-7.37,57.34,7.91,58.54,12.06.96,16.3-11.7,17.37-17.83,3.18-18.24,3.73-53.04,18.46-71.75C78.63.71,106.55,3.13,106.55,3.13c-36.49,4.62-35.39,49.52-38.25,66.91ZM197.61,104.57c-4.62-36.54-49.46-35.44-66.83-38.3-17.37-2.86-39.79-4.95-45.61-25.64C72.87-3.08,134.42-2.18,150.35,18.07c-30-23.88-57.26-7.38-58.47,7.92-.96,12.07,11.68,16.32,17.81,17.39,18.22,3.19,52.98,3.74,71.66,18.49,18.68,14.75,16.26,42.7,16.26,42.7Z"
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

Abstract30.displayName = "Abstract30";
export { Abstract30 };
