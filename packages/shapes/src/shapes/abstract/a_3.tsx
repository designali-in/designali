import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract3: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-3";

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
            d="M184.23,172.48c-1.56-1.56-2.44-3.67-2.44-5.88v-41.59c0-4.59-3.72-8.31-8.31-8.31h-41.59c-2.21,0-4.32-.88-5.88-2.44l-8.38-8.38c-3.25-3.25-3.25-8.51,0-11.76l8.39-8.39c1.56-1.56,3.67-2.43,5.88-2.43h41.59c4.59,0,8.31-3.72,8.31-8.31v-41.6c0-2.2.87-4.32,2.43-5.88l10.84-10.84c3.25-3.24,3.25-8.5,0-11.75-3.25-3.24-8.51-3.24-11.75,0l-10.84,10.84c-1.56,1.56-3.67,2.43-5.88,2.43h-4.02s-37.58,0-37.58,0c-4.59,0-8.31,3.72-8.31,8.31v41.59c0,2.21-.88,4.32-2.43,5.88l-8.39,8.39c-3.24,3.25-8.5,3.25-11.75,0l-8.39-8.39c-1.56-1.56-2.43-3.67-2.43-5.88V26.52c0-4.59-3.72-8.31-8.31-8.31h-41.59c-2.2,0-4.32-.88-5.88-2.44l-10.84-10.84c-3.25-3.25-8.51-3.25-11.75,0-3.25,3.25-3.25,8.51,0,11.75l10.84,10.84c1.56,1.56,2.43,3.67,2.43,5.88v41.59c0,4.59,3.73,8.31,8.31,8.31h41.59c2.21,0,4.32.87,5.88,2.43l8.39,8.39c3.25,3.25,3.25,8.51,0,11.76l-8.39,8.38c-1.56,1.56-3.68,2.44-5.88,2.44H26.52c-4.59,0-8.31,3.72-8.31,8.31v41.6c0,2.2-.88,4.32-2.43,5.88l-10.84,10.83c-3.25,3.25-3.25,8.51,0,11.76,3.25,3.24,8.5,3.24,11.75,0l10.84-10.84c1.56-1.56,3.67-2.44,5.88-2.44h41.6c4.59,0,8.31-3.72,8.31-8.31v-41.59c0-2.21.87-4.32,2.43-5.88l8.39-8.39c3.25-3.25,8.51-3.25,11.75,0l8.39,8.38c1.56,1.56,2.44,3.68,2.44,5.88v41.59c0,4.59,3.72,8.31,8.31,8.31h41.59c2.21,0,4.32.88,5.88,2.44l10.84,10.84c3.24,3.24,8.5,3.24,11.75,0,3.25-3.25,3.25-8.51,0-11.76l-10.84-10.83Z"
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

Abstract3.displayName = "Abstract3";
export { Abstract3 };
