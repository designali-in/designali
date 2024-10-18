import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract192: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-192";

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
            d="M169.89,71.05V30.11h-40.94L100,1.16l-28.95,28.95H30.11v40.94L1.16,100l28.95,28.95v40.94h40.94l28.95,28.95,28.95-28.95h40.94v-40.94l28.95-28.95-28.95-28.95h0ZM30.11,122.99l-22.99-22.99,22.99-22.99v45.99ZM100,7.12l22.99,22.99h-45.99l22.99-22.99ZM34.32,34.32h32.52l-32.52,32.52v-32.52ZM34.32,165.68v-32.52l32.52,32.52h-32.52ZM100,192.88l-22.99-22.99h45.99l-22.99,22.99h0ZM165.68,165.68h-32.52l32.52-32.52v32.52ZM165.68,127.21l-38.47,38.47h-54.41l-38.47-38.47v-54.41l38.47-38.47h54.41l38.47,38.47v54.41ZM165.68,66.84l-32.52-32.52h32.52v32.52ZM169.89,77.01l22.99,22.99-22.99,22.99v-45.99h0Z"
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

Abstract192.displayName = "Abstract192";
export { Abstract192 };
