import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract157: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-157";

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
            d="M138.98,139.41c-9.98,9.98-23.75,16.15-38.98,16.15s-28.99-6.16-38.98-16.15c-9.98-9.98-16.15-23.75-16.15-38.98s6.17-29,16.15-38.98c9.99-9.98,23.75-16.15,38.98-16.15s29,6.16,38.98,16.15c9.98,9.98,16.15,23.75,16.15,38.98s-6.16,29-16.15,38.98ZM162.06,96.47c-1.98-31.33-27.13-56.36-58.52-58.12V3.04h-7.07v35.3c-31.39,1.76-56.54,26.79-58.52,58.12H3.04v7.07h34.84c1.56,31.73,26.9,57.21,58.58,58.99v34.43h7.07v-34.43c31.68-1.78,57.02-27.25,58.58-58.99h34.84v-7.07h-34.9Z"
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

Abstract157.displayName = "Abstract157";
export { Abstract157 };
