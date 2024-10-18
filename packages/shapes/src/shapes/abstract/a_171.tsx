import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract171: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-171";

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
            d="M162.44,93.84c-21.09-3.99-33.93-7.6-41.37-15.24-5.77-5.92-9.85-14.47-14.9-42.63L100,1.53l-6.17,34.44c-3.9,21.73-7.42,34.96-14.9,42.63-5.74,5.89-14.03,10.07-41.37,15.24l-32.6,6.16,32.6,6.16c21.09,3.99,33.93,7.6,41.37,15.24,5.77,5.92,9.85,14.47,14.9,42.63l6.17,34.44,6.17-34.44c3.9-21.73,7.42-34.96,14.9-42.63,5.74-5.89,14.03-10.07,41.37-15.24l32.6-6.16-32.6-6.16h0ZM131.37,100.96c-8.33,3.01-14.46,6.73-19.29,11.69-4.81,4.94-8.41,11.21-11.33,19.72-.25.74-.5,1.49-.75,2.28-.25-.78-.5-1.54-.75-2.28-2.92-8.51-6.52-14.78-11.33-19.72-4.83-4.96-10.95-8.67-19.29-11.69-.9-.33-1.84-.65-2.8-.96.97-.32,1.9-.64,2.8-.96,8.33-3.01,14.46-6.73,19.29-11.69,4.81-4.94,8.41-11.21,11.33-19.72.25-.74.5-1.49.75-2.28.25.78.5,1.54.75,2.28,2.92,8.51,6.52,14.78,11.33,19.72,4.83,4.96,10.95,8.67,19.29,11.69.9.33,1.84.65,2.8.96-.97.32-1.9.64-2.8.96Z"
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
              d="M1716 91H82v102h114V91z"
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

Abstract171.displayName = "Abstract171";
export { Abstract171 };
