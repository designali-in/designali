import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract16: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-16";

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
            d="M100.1,122.36c-15.79,0-28.59-12.83-28.59-28.66s12.8-28.66,28.59-28.66,28.58,12.83,28.58,28.66-12.8,28.66-28.58,28.66ZM192.59,129.49c-1.91,7.48-6.81,14.17-14.12,18.13-5.69,3.08-11.96,4.02-17.89,3.1-8.88-1.37-17.98.01-25.89,4.29l-1.49.8c-7.92,4.28-14.06,11.13-17.8,19.33-2.49,5.47-6.72,10.21-12.41,13.28-3.39,1.83-6.98,2.9-10.58,3.28-10.29,2.07-21.33-1.64-28.21-10.5-3.97-5.12-5.93-11.16-6.01-17.17-.12-9.01-2.98-17.78-8.5-24.89l-1.04-1.34c-5.52-7.12-13.28-12.06-21.96-14.4-5.8-1.56-11.15-4.96-15.12-10.07-9.66-12.45-7.45-30.38,4.91-40.12,12.35-9.73,29.98-7.75,39.87,4.49,4.19,5.19,6.27,11.39,6.37,17.56.14,9.29,3.33,18.29,9.02,25.63,4.77,6.15,11.1,10.87,18.29,13.67,1.23.03,2.45.13,3.65.31,9.17,1.4,18.54-.27,26.7-4.68,7.68-4.15,13.91-10.53,17.85-18.3.29-1.08.63-2.13,1.04-3.15,3.31-8.38,3.99-17.57,1.6-26.26l-.45-1.64c-2.4-8.69-7.7-16.23-14.84-21.7-.05-.04-.1-.08-.14-.12-7.11-5.28-15.63-8.31-24.49-8.31h-1.69c-8.99,0-17.65,3.11-24.82,8.55-4.78,3.63-10.74,5.78-17.21,5.78-15.74,0-28.5-12.75-28.58-28.5-.09-15.75,12.29-28.49,28-28.8,6.66-.13,12.82,2.02,17.74,5.73,7.41,5.59,16.45,8.59,25.72,8.59s18.31-3,25.72-8.59c4.92-3.71,11.07-5.86,17.74-5.73h.02c2.41.04,4.77.39,7.05,1.02.07.02.14.04.21.06.36.1.71.21,1.06.32.27.09.52.18.78.28.15.05.31.1.46.16.39.15.78.3,1.16.47.02.01.04.02.06.03,8.78,3.78,15.22,11.84,16.82,21.58.02.09.03.18.04.27.03.21.06.42.09.63.05.34.09.68.12,1.01,0,.04,0,.07.01.11.42,4.36-.18,8.66-1.62,12.61-.02.05-.04.1-.05.14-.06.15-.11.31-.17.46-3.4,8.65-3.87,18.18-1.4,27.14,2.47,8.96,7.76,16.89,15.11,22.56,4.88,3.77,8.6,9.14,10.24,15.61,1.52,5.98,1.07,11.97-.95,17.3Z"
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

Abstract16.displayName = "Abstract16";
export { Abstract16 };
