import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract208: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-208";

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
            d="M150.75,100c16.59-14.11,29.35-28.88,37-42.85,7.25-13.25,9.87-25.43,7.57-35.24-2.11-9-8.23-15.12-17.23-17.23-9.8-2.3-21.99.32-35.24,7.57-13.98,7.65-28.75,20.41-42.85,37-14.11-16.59-28.88-29.35-42.85-37C43.9,5,31.71,2.38,21.91,4.68,12.91,6.79,6.79,12.91,4.68,21.91c-2.3,9.8.32,21.99,7.57,35.24,7.65,13.98,20.41,28.75,37,42.85-16.59,14.11-29.35,28.88-37,42.85-7.25,13.25-9.87,25.43-7.57,35.24,2.11,9,8.23,15.12,17.23,17.23,9.8,2.3,21.99-.32,35.24-7.57,13.98-7.65,28.75-20.41,42.85-37,14.11,16.59,28.88,29.35,42.85,37,10.13,5.55,19.64,8.38,27.93,8.38,2.56,0,5-.27,7.3-.81,9-2.11,15.12-8.23,17.23-17.23,2.3-9.8-.32-21.99-7.57-35.24-7.65-13.98-20.41-28.75-37-42.85h0ZM190.29,176.91c-1.66,7.09-6.29,11.72-13.39,13.39-8.42,1.98-19.63-.53-31.58-7.07-14.07-7.7-29.05-20.89-43.34-38.14l-1.99-2.4-1.99,2.4c-14.29,17.25-29.28,30.43-43.34,38.14-11.94,6.54-23.16,9.05-31.58,7.07-7.09-1.66-11.72-6.29-13.39-13.39-1.98-8.42.53-19.63,7.07-31.58,7.7-14.07,20.89-29.05,38.14-43.34l2.4-1.99-2.4-1.99c-17.25-14.29-30.43-29.28-38.14-43.34-6.54-11.94-9.05-23.16-7.07-31.58,1.66-7.09,6.29-11.72,13.39-13.39,8.42-1.98,19.63.53,31.58,7.07,14.07,7.7,29.05,20.89,43.34,38.14l1.99,2.4,1.99-2.4c14.29-17.25,29.28-30.43,43.34-38.14,11.94-6.54,23.16-9.05,31.58-7.07,7.09,1.66,11.72,6.29,13.39,13.39,1.98,8.42-.53,19.63-7.07,31.58-7.7,14.07-20.89,29.05-38.14,43.34l-2.4,1.99,2.4,1.99c17.25,14.29,30.43,29.28,38.14,43.34,6.54,11.94,9.05,23.16,7.07,31.58h0Z"
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
            <path fill="#FF58E4" d="M2080 0H69v1208h61V0z"></path>
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h114V91z"
            ></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M1208 80H28v120h85V80z"
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

Abstract208.displayName = "Abstract208";
export { Abstract208 };
