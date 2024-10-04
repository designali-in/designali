import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract121: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-121";

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
            d="M88.62,118.97L12.2,195.39c-2.09,2.1-5.5,2.1-7.59,0-2.1-2.1-2.1-5.5,0-7.59l76.41-76.41c2.1-2.09,5.5-2.09,7.59,0,2.1,2.1,2.1,5.5,0,7.59ZM195.39,12.2l-76.41,76.42c-2.1,2.1-5.5,2.1-7.59,0-2.1-2.09-2.1-5.5,0-7.59L187.79,4.61c2.1-2.1,5.5-2.1,7.59,0,2.1,2.09,2.1,5.5,0,7.59ZM195.39,195.39c-2.1,2.1-5.5,2.1-7.59,0l-76.41-76.41c-2.1-2.09-2.1-5.5,0-7.59,2.1-2.09,5.5-2.09,7.59,0l76.41,76.41c2.1,2.1,2.1,5.5,0,7.59ZM88.62,88.62c-2.09,2.1-5.5,2.1-7.59,0L4.61,12.2c-2.1-2.09-2.1-5.5,0-7.59,2.09-2.1,5.5-2.1,7.59,0l76.42,76.41c2.1,2.1,2.1,5.5,0,7.59Z"
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

Abstract121.displayName = "Abstract121";
export { Abstract121 };
