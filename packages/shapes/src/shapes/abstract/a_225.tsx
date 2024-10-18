import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract225: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-225";

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
            d="M96.72,123.55l3.28,26.15,3.28-26.15c.45-3.61,3.3-6.46,6.92-6.92l26.15-3.28-26.15-3.28c-3.61-.45-6.46-3.3-6.92-6.92l-3.28-26.15-3.28,26.15c-.45,3.61-3.3,6.46-6.92,6.92l-26.15,3.28,26.15,3.28c3.61.45,6.46,3.3,6.92,6.92Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.14,137.1c-2.96,0-5.78.56-8.37,1.58l-51.17-81.88c4.56-4.21,7.42-10.23,7.42-16.92,0-12.71-10.3-23.02-23.02-23.02s-23.02,10.3-23.02,23.02c0,6.69,2.86,12.71,7.42,16.92l-51.17,81.88c-2.6-1.01-5.42-1.58-8.37-1.58-12.71,0-23.02,10.3-23.02,23.02s10.3,23.02,23.02,23.02c11.25,0,20.62-8.08,22.62-18.75h105.05c2,10.67,11.36,18.75,22.62,18.75,12.71,0,23.02-10.3,23.02-23.02s-10.3-23.02-23.02-23.02ZM91.63,61.32c2.6,1.01,5.42,1.58,8.37,1.58s5.78-.56,8.37-1.58l51.17,81.88c-3.57,3.29-6.09,7.69-7.02,12.66H47.47c-.93-4.97-3.45-9.37-7.02-12.66l51.17-81.88Z"
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
              d="M196 91H82v102h225V91z"
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

Abstract225.displayName = "Abstract225";
export { Abstract225 };
