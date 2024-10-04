import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract148: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-148";

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
            d="M190.24,118.2l-27.73,14.81-27.9-14.9v-35.31l27.81-14.86,27.81,14.86v35.4ZM131.21,189.22l-27.83-14.86v-35.31l27.83-14.85,27.82,14.85v35.31l-27.82,14.86ZM96.32,174.36l-27.81,14.86-27.83-14.86v-35.16l28.06-14.98,27.59,14.74v35.4ZM9.75,82.79l27.82-14.86,27.81,14.86v35.16l-28.05,14.97-27.58-14.73v-35.4ZM40.67,25.64l27.83-14.85,27.81,14.85v35.41l-27.81,14.85-27.83-14.85V25.64ZM103.39,25.64l27.83-14.85,27.82,14.85v35.41l-27.82,14.85-27.83-14.85V25.64ZM127.82,118.1l-27.92,14.9-27.73-14.81v-35.4l27.81-14.86,27.83,14.86v35.31ZM197.03,78.61l-31.21-16.67V21.45L131.21,2.98l-31.36,16.73L68.51,2.98l-34.62,18.47v40.65L2.97,78.61v43.78l30.91,16.51v39.65l34.62,18.47,31.35-16.74,31.36,16.74,34.61-18.47v-39.5l31.21-16.66v-43.78Z"
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

Abstract148.displayName = "Abstract148";
export { Abstract148 };
