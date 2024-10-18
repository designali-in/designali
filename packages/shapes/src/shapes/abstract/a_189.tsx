import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract189: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-189";

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
            d="M174.19,42.19c-15.44-15.44-35.97-23.94-57.81-23.94-5.57,0-11.05.56-16.38,1.63-5.33-1.08-10.81-1.63-16.38-1.63-21.84,0-42.37,8.5-57.81,23.94C10.37,57.63,1.87,78.16,1.87,100s8.5,42.37,23.94,57.81c15.44,15.44,35.97,23.94,57.81,23.94,5.57,0,11.05-.56,16.38-1.63,5.33,1.08,10.81,1.63,16.38,1.63,21.84,0,42.37-8.5,57.81-23.94,15.44-15.44,23.94-35.97,23.94-57.81s-8.5-42.37-23.94-57.81h0ZM83.62,176.28c-20.37,0-39.53-7.93-53.94-22.34-14.41-14.41-22.34-33.56-22.34-53.94s7.93-39.53,22.34-53.94c14.41-14.41,33.56-22.34,53.94-22.34,1.02,0,2.04.03,3.06.07-10.41,4.05-19.97,10.26-28.11,18.4-15.44,15.44-23.95,35.97-23.95,57.81s8.5,42.37,23.95,57.81c8.14,8.14,17.69,14.35,28.11,18.4-1.02.04-2.04.07-3.06.07h0ZM62.44,153.94c-14.41-14.41-22.34-33.56-22.34-53.94s7.93-39.53,22.34-53.94c10.46-10.46,23.43-17.51,37.56-20.58,14.12,3.07,27.09,10.12,37.56,20.58,14.41,14.41,22.34,33.56,22.34,53.94s-7.93,39.53-22.34,53.94c-10.46,10.46-23.43,17.51-37.56,20.58-14.12-3.07-27.09-10.12-37.56-20.58ZM170.32,153.94c-14.41,14.41-33.56,22.34-53.94,22.34-1.02,0-2.04-.03-3.06-.07,10.41-4.05,19.97-10.26,28.11-18.4,15.44-15.44,23.94-35.97,23.94-57.81s-8.5-42.37-23.94-57.81c-8.14-8.14-17.69-14.35-28.11-18.4,1.02-.04,2.03-.07,3.06-.07,20.37,0,39.53,7.93,53.94,22.34s22.34,33.56,22.34,53.94-7.93,39.53-22.34,53.94h0Z"
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

Abstract189.displayName = "Abstract189";
export { Abstract189 };
