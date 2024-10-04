import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract105: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-105";

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
            d="M158.27,166.16c-1.06,2.07-3.43,2.87-5.38,1.81-9.52-5.15-36.77-18.67-57.9-16.99h-.36c-.21.01-22.3-.07-50.26,16.85-.28.16-22.08,12.47-36.93-13.09-1.19-2.03-15.45-27.48,9.17-45.86l.15-.11.16-.1c.34-.21,34.13-21.38,38.17-65.36.07-1.31.7-11.09,4.96-21.19,6.23-14.77,17.23-19.03,31.47-19.79-11.16.6-19.11,11.69-24.07,23.44-3.8,9.02-4.24,17.99-4.24,18.08l-.02.22c-4.3,47.5-38.94,70.19-42.1,72.16-18.78,14.15-7.34,32.93-6.84,33.72l.08.13c10.55,18.17,24.56,10.92,26.13,10.04,28.84-17.44,51.59-17.91,54.1-17.91,23.34-1.77,51.86,12.38,61.99,17.9,2.06,1.12,2.84,3.88,1.72,6.06ZM179.21,179.33c-1.04,2.13-14.34,28.17-41.36,14.3l-.17-.09-.16-.11c-.33-.21-34.18-21.29-71.46-3.13-1.08.59-9.25,4.87-19.48,5.93-14.95,1.54-23.86-6.64-31.58-19.6,6.05,10.16,18.91,12.07,30.81,10.85,9.13-.93,16.54-5,16.62-5.04l.19-.1c40.24-19.67,75.71,1.45,78.88,3.43,20.72,10.52,30.07-9.56,30.46-10.42l.06-.13c9.31-18.95-3.49-28.46-4.98-29.48-28.39-18.31-40.11-39.38-41.36-41.73-13.07-20.98-15.94-54.74-16.57-66.99-.12-2.49,1.7-4.59,4.01-4.63,2.18-.04,4.01,1.78,4.14,4.14.62,11.48,3.38,43.75,15.26,62.69l.19.34c.1.2,11.06,20.93,38.58,38.68.27.18,21.03,14.46,7.93,41.11ZM192.11,158.65c5.08-10.76.15-23.73-6.81-34.23-5.34-8.05-12.32-12.94-12.39-12.99l-.17-.12c-35.97-27.7-36.91-71.46-36.92-75.4-2-24.65-22.76-23.28-23.64-23.21h-.14c-19.84.84-21.01,17.58-21.08,19.49-.37,35.71-11.34,57.26-12.59,59.61-10.21,22.75-35.77,42.42-45.25,49.16-1.93,1.37-4.53.73-5.73-1.41-1.12-2.02-.59-4.65,1.23-5.95,8.88-6.35,33.3-25.15,42.48-45.77l.17-.35c.11-.2,11.18-20.85,11.54-55.48,0-.34.99-26.9,28.89-28.07,2.23-.11,29.75-.78,32.23,31.44l.02.2v.2c0,.42.15,42.63,33.43,68.33,1.01.71,8.55,6.18,14.53,15.21,8.75,13.2,6.68,25.63.2,39.35Z"
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

Abstract105.displayName = "Abstract105";
export { Abstract105 };
