import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract70: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-70";

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
            d="M147.21,72.74v-34.44l29.83,17.22v34.44l-29.83-17.22ZM177.04,144.47l-29.83,17.22v-34.44l29.83-17.22v34.44ZM100,188.95l-29.82-17.22,29.82-17.22,29.82,17.22-29.82,17.22ZM22.96,110.03l29.82,17.22v34.44l-29.82-17.22v-34.44ZM22.96,55.52l29.82-17.22v34.44l-29.82,17.22v-34.44ZM129.83,28.27l-29.83,17.21-29.83-17.22,29.83-17.21,29.83,17.22ZM107.6,49.87l29.82-17.22,2.21,1.27v34.43l-32.03-18.48ZM62.58,32.65l29.82,17.22-32.03,18.48v-34.43l2.21-1.27ZM52.78,118.48l-29.82-17.22v-2.54l29.82-17.22v36.98ZM60.37,166.07v-34.44l32.03,18.49-29.82,17.22-2.21-1.27ZM139.63,166.07l-2.21,1.27-29.82-17.22,32.03-18.48v34.43ZM147.21,81.51l29.83,17.22v2.54l-29.83,17.22v-36.98ZM139.63,122.86l-39.63,22.88-39.63-22.88v-45.74l39.63-22.87,39.63,22.87v45.74ZM147.21,29.53h0L100,2.28l-47.22,27.25L15.36,51.13v97.72l47.22,27.26,37.42,21.61,37.42-21.61,1.9-1.09,45.32-26.17V51.13l-37.43-21.6Z"
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

Abstract70.displayName = "Abstract70";
export { Abstract70 };
