import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract40: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-40";

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
            d="M161.09,89.06c-.82-1.99-2.76-3.28-4.91-3.28h-39.26l29.07-72.13c.95-2.34.11-5.03-2-6.42-2.11-1.39-4.9-1.11-6.69.67L40.06,105.14c-1.52,1.52-1.98,3.81-1.15,5.79s2.76,3.28,4.91,3.28h39.26l-29.07,72.13c-.95,2.34-.11,5.03,2,6.42.9.59,1.91.88,2.93.88,1.37,0,2.73-.53,3.76-1.56l97.23-97.24c1.52-1.52,1.98-3.81,1.15-5.79ZM105.45,85.78h-30.99l51.92-51.92-20.93,51.92ZM94.55,114.22h31l-51.92,51.92,20.92-51.92ZM136.18,103.58H56.66l7.17-7.17h79.52l-7.17,7.17Z"
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

Abstract40.displayName = "Abstract40";
export { Abstract40 };
