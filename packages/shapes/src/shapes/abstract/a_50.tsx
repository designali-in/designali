import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract50: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-50";

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
            d="M175.51,163.01l-72.55-41.31,16.2-9.22,72.7,41.4-16.36,9.14ZM22.89,78.58v83.76l-16.24-9.24V48.41l71.43,40.67-16.21,9.23-36.83-20.97c-.45-.25-.99-.25-1.43,0-.44.26-.71.73-.71,1.24ZM24.32,36.83l72.75,41.43-16.1,9.16L8.13,45.94l16.19-9.11ZM175.41,56.96h-1.44s.08,61.82.08,61.82l-15.79-8.99.08-20.47h0s0,0,0,0v-21.83c0-.51-.27-.98-.71-1.24-.45-.26-.99-.26-1.44,0l-111.83,63.65v-18.32L174.21,37.67l-.23,19.28,1.44.02ZM141.07,100l14.4-8.19-.07,16.35-14.33-8.16ZM41.49,110.74v21.64c0,.51.27.98.71,1.24.45.26.99.26,1.44,0l111.83-63.65v18.52L25.76,162.34v-81.29l15.73,8.96v20.72ZM44.37,91.65l14.59,8.31-14.59,8.31v-16.61ZM193.35,151.41l-71.28-40.59,16.1-9.17,36.62,20.86c.22.12.47.19.71.19s.5-.07.73-.2c.44-.26.71-.73.71-1.24l-.09-64.28.23-19.36,16.27,9.15v104.64ZM195.5,44.68l-19.11-10.76h0c-.44-.24-.97-.24-1.42,0l-74.98,42.68L25.04,33.93c-.44-.25-.98-.25-1.42,0l-19.11,10.76c-.45.25-.73.73-.74,1.25h0v108.01c0,.52.28.99.73,1.25l19.11,10.88c.22.13.47.19.71.19s.49-.06.71-.19l75.02-42.71,74.73,42.56c.22.12.47.19.71.19s.49-.06.7-.18l19.29-10.78h0s.02-.01.03-.02c.44-.25.71-.73.71-1.24V45.93c0-.52-.28-1-.74-1.25Z"
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

Abstract50.displayName = "Abstract50";
export { Abstract50 };
