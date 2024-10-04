import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract98: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-98";

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
            d="M177.3,36.54c-7.85-7.87-18.28-12.21-29.38-12.21s-21.53,4.34-29.38,12.21l-24.02,24.11-18.54-18.61c-13.18-13.22-34.62-13.22-47.79,0-13.18,13.22-13.18,34.74,0,47.96l77.3,77.57,71.81-72.07c7.85-7.87,12.17-18.34,12.17-29.48s-4.32-21.61-12.17-29.49ZM181.69,99.91l-76.2,76.48L23.8,94.41c-7.56-7.58-11.72-17.66-11.72-28.39s4.16-20.81,11.72-28.39c7.56-7.59,17.6-11.76,28.29-11.76s20.73,4.17,28.29,11.76l14.15,14.19,19.63-19.7c9.01-9.04,21-14.01,33.77-14.01s24.77,4.97,33.77,14.02c9.01,9.03,13.97,21.07,13.97,33.89s-4.96,24.85-13.97,33.88ZM81.46,36.54c-7.85-7.87-18.28-12.21-29.38-12.21s-21.53,4.34-29.38,12.21c-7.85,7.87-12.17,18.35-12.17,29.49s4.32,21.61,12.17,29.48l81.69,81.98-4.39,4.41L18.31,99.91c-9.01-9.03-13.97-21.07-13.97-33.88s4.96-24.86,13.97-33.89c9-9.04,21-14.02,33.77-14.02s24.77,4.97,33.77,14.01l13.06,13.11-4.39,4.41-13.06-13.11ZM176.21,94.41l-70.72,70.98-4.39-4.41,70.72-70.97c13.18-13.22,13.18-34.74,0-47.96-13.18-13.22-34.62-13.23-47.79,0l-24.02,24.11-4.4-4.41,24.02-24.11c7.56-7.59,17.61-11.76,28.29-11.76s20.73,4.17,28.29,11.76c7.56,7.58,11.72,17.66,11.72,28.39s-4.16,20.8-11.72,28.39Z"
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

Abstract98.displayName = "Abstract98";
export { Abstract98 };
