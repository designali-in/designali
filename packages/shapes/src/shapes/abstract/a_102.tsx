import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract102: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-102";

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
            d="M38.33,38.33C28.08,26.33,17.67,14.54,6.86,3.04c22.95,16.57,48.58,29.4,71.2,46.3,11.9,8.89,22.12,19.34,21.93,35.27-7.52,0-14.62-2.09-21.83-6.44-9.88-15.94-25.77-27.85-39.84-39.84ZM161.67,38.33c-14.15,12.05-29.71,23.96-39.84,39.84-7.2,4.34-14.3,6.44-21.83,6.44-.2-15.98,9.93-26.37,21.93-35.27,22.7-16.84,48.23-29.72,71.2-46.3-10.81,11.5-21.22,23.29-31.47,35.29ZM78.07,150.66c-22.63,16.9-48.25,29.73-71.2,46.3,10.81-11.5,21.22-23.29,31.47-35.29,14.07-11.99,29.96-23.9,39.84-39.84,7.2-4.34,14.3-6.44,21.83-6.44,0,0-10.03,26.38-21.93,35.27ZM121.93,150.67c-12-8.9-21.93-35.27-21.93-35.27,7.52,0,14.62,2.09,21.83,6.44,10.14,15.88,25.69,27.79,39.84,39.84,10.25,12,20.66,23.79,31.47,35.29-22.97-16.58-48.5-29.46-71.2-46.29ZM150.66,121.93c16.84,22.7,29.72,48.23,46.3,71.2-11.5-10.81-23.29-21.22-35.29-31.47-12.05-14.15-23.96-29.71-39.84-39.84-4.34-7.2-6.44-14.3-6.44-21.83,15.98-.2,26.37,9.93,35.27,21.93ZM115.39,100c0-7.52,2.09-14.62,6.44-21.83,15.88-10.14,27.79-25.7,39.84-39.84,12-10.25,23.79-20.66,35.29-31.47-16.58,22.97-29.46,48.5-46.3,71.2-8.9,12-19.29,22.13-35.27,21.93ZM49.34,78.07C32.45,55.44,19.61,29.81,3.04,6.86c11.5,10.81,23.29,21.22,35.29,31.47,11.99,14.07,23.9,29.96,39.84,39.84,4.34,7.2,6.44,14.3,6.44,21.83,0,0-26.39-10.03-35.27-21.93ZM38.33,161.67c-12,10.25-23.79,20.66-35.29,31.47,16.57-22.95,29.4-48.58,46.3-71.2,8.89-11.9,35.27-21.93,35.27-21.93,0,7.52-2.09,14.62-6.44,21.83-15.94,9.88-27.85,25.77-39.84,39.84Z"
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

Abstract102.displayName = "Abstract102";
export { Abstract102 };
