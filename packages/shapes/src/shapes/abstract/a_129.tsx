import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract129: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-129";

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
            d="M178.91,164.14c-.06,0-.13-.01-.19-.02-7.54-.61-14.66-3.73-20.01-9.08l-30.02-30.02c-6.76-6.76-10.56-15.93-10.56-25.49h0c0-9.56,3.8-18.73,10.56-25.49l29.04-29.04c5.53-5.53,12.95-8.61,20.77-9.12.29-.02.59-.05.89-.09,6.16-.8,11.06-5.86,11.66-12.05.82-8.51-6.26-15.6-14.77-14.79-6.3.6-11.42,5.65-12.1,11.95-.01.11-.02.21-.03.31-.64,7.39-3.8,14.32-9.05,19.57l-29.83,29.83c-6.76,6.76-15.93,10.56-25.49,10.56h0c-9.56,0-18.73-3.8-25.49-10.56l-29.33-29.33c-5.35-5.35-8.47-12.46-9.08-20,0-.07-.01-.13-.02-.2-.6-6.34-5.72-11.49-12.06-12.12-8.53-.85-15.65,6.25-14.83,14.78.59,6.14,5.42,11.19,11.52,12.04.31.04.61.08.92.1,7.67.56,14.94,3.66,20.38,9.1l29.07,29.07c6.76,6.76,10.56,15.93,10.56,25.49h0c0,9.56-3.8,18.73-10.56,25.49l-29.31,29.31c-5.39,5.39-12.58,8.51-20.19,9.09-.06,0-.13.01-.19.02-6.38.58-11.57,5.72-12.19,12.09-.83,8.53,6.27,15.64,14.8,14.8,6.38-.62,11.51-5.81,12.09-12.19,0-.06.01-.12.02-.18.59-7.61,3.7-14.8,9.09-20.19l29.31-29.31c6.76-6.76,15.93-10.56,25.49-10.56h0c9.56,0,18.73,3.8,25.49,10.56l29.76,29.76c5.44,5.44,8.54,12.7,9.1,20.38.02.3.05.61.1.92.85,6.11,5.9,10.93,12.04,11.52,8.53.82,15.63-6.3,14.78-14.83-.63-6.34-5.78-11.46-12.12-12.06Z"
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

Abstract129.displayName = "Abstract129";
export { Abstract129 };
