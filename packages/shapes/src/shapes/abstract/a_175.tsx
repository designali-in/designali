import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract175: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-175";

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
            d="M197.98,101.71v-3.43c-41.72,0-65.55-2.12-72-13.28-6.45-11.17,3.64-32.86,24.49-68.99l-2.97-1.71c-20.86,36.13-34.61,55.71-47.5,55.71s-26.64-19.58-47.5-55.71l-2.97,1.71c20.86,36.13,30.94,57.83,24.49,68.99s-30.28,13.28-72,13.28v3.43c41.72,0,65.55,2.12,72,13.28s-3.63,32.86-24.49,68.99l2.97,1.71c20.86-36.13,34.61-55.71,47.5-55.71s26.64,19.58,47.5,55.71l2.97-1.71c-20.86-36.13-30.94-57.83-24.49-68.99s30.28-13.28,72-13.28h0ZM123.01,113.28c-4.33,7.49-2.66,18.12,3.96,33.42-9.94-13.38-18.31-20.14-26.97-20.14s-17.03,6.76-26.97,20.14c6.62-15.3,8.28-25.93,3.96-33.42-4.33-7.49-14.36-11.37-30.92-13.28,16.56-1.92,26.6-5.79,30.92-13.28,4.32-7.49,2.66-18.12-3.96-33.42,9.94,13.38,18.32,20.14,26.97,20.14s17.03-6.76,26.97-20.14c-6.62,15.3-8.28,25.93-3.96,33.42,4.33,7.49,14.36,11.37,30.92,13.28-16.56,1.92-26.6,5.79-30.92,13.28h0Z"
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

Abstract175.displayName = "Abstract175";
export { Abstract175 };
