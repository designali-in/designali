import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract35: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-35";

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
            d="M30.37,159.73h0s2.08-2.09,2.08-2.09l-2.07,2.09ZM114.88,147.66l-72.83,19.62-7.8-7.83,83.48-22.48-2.85,10.7ZM143.83,139.87l2.85-10.71,26.66-7.17c.51-.13.91-.53,1.04-1.05.13-.5-.01-1.05-.38-1.42h0l-8.63-8.64-44.11-44.33,8.47-2.28,62.31,62.62-48.2,12.98ZM100.05,45.26l-10.29-10.34,2.25-8.53,16.51,16.59-8.47,2.28ZM147.55,125.87l2.27-8.51,14.06-3.78,6.22,6.22-22.55,6.07ZM118.61,133.67l-85.11,22.92,7.55-28.33,7.8,7.84-1.78,6.68c-.14.51,0,1.05.38,1.43.37.37.91.51,1.42.38l7.45-2.03,64.57-17.4-2.27,8.51ZM56.6,107.01l-7.79-7.83L73.68,5.87l10.64-2.87-27.73,104ZM194.1,124.8l-61.11-61.42,10.64-2.87,53.33,53.59-2.85,10.7ZM111.8,42.09l-19.51-19.6c-.37-.37-.91-.52-1.42-.38-.51.13-.9.53-1.04,1.05l-3.12,11.83-21.51,80.67-6.2-6.23L87.16,3.76l35.28,35.46-10.64,2.87ZM168.52,42.8h-.02s.14-2.95.14-2.95l-.12,2.95ZM107.99,173.62l-16.51-16.59,8.47-2.28,10.29,10.34-2.25,8.53ZM26.67,78.01c-.51.14-.91.54-1.04,1.05-.13.51.01,1.05.38,1.43l8.63,8.63,44.12,44.34-8.47,2.28L7.97,73.11l48.2-12.98-2.85,10.71-26.66,7.17ZM82.27,63.04l2.85-10.7,72.83-19.62,7.8,7.83-83.48,22.48ZM126.32,194.13l-10.65,2.87,27.73-104,7.8,7.83-24.87,93.3ZM158.95,71.73l-7.79-7.83,1.78-6.68c.13-.51,0-1.05-.38-1.43-.37-.37-.91-.52-1.42-.38l-7.45,2.03-64.57,17.4,2.27-8.52,85.11-22.92-7.56,28.32ZM50.17,82.64l-14.06,3.78-6.23-6.23,22.56-6.07-2.27,8.52ZM56.36,139.48L3.04,85.9l2.85-10.7,61.11,61.42-10.64,2.87ZM112.84,196.23l-35.29-35.45,10.64-2.87,19.51,19.61c.37.37.91.52,1.42.38.5-.13.9-.54,1.04-1.05l3.12-11.83,21.51-80.67,6.2,6.23-28.16,105.65ZM148.76,61.49l-1.86-1.86,2.54-.69-.68,2.56Z"
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

Abstract35.displayName = "Abstract35";
export { Abstract35 };
