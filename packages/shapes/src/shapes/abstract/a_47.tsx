import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract47: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-47";

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
            d="M115.34,17.94c-8.47-8.47-22.21-8.47-30.69,0L17.94,84.66c-8.47,8.47-8.47,22.21,0,30.69l66.72,66.72c8.47,8.47,22.21,8.47,30.69,0l66.72-66.72c8.47-8.47,8.47-22.21,0-30.69L115.34,17.94ZM100,197.73L2.27,100,100,2.27l97.73,97.73-97.73,97.73ZM168.87,52.83c0-11.99-9.72-21.7-21.7-21.7H52.83c-11.99,0-21.7,9.72-21.7,21.7v94.34c0,11.99,9.72,21.7,21.7,21.7h94.34c11.99,0,21.7-9.72,21.7-21.7V52.83ZM30.9,169.1V30.9h138.2v138.2H30.9Z"
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

Abstract47.displayName = "Abstract47";
export { Abstract47 };
