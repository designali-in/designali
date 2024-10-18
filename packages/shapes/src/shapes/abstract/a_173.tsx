import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract173: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-173";

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
            d="M125.69,85.2c-6.36-11.04,3.62-32.47,24.27-68.15l-1.47-.85h0l-1.47-.85c-20.64,35.67-34.24,55.01-46.98,55.01h-.01c-12.74-.01-26.31-19.37-46.89-55.09l-1.47.85h0l-1.47.85c20.58,35.72,30.52,57.17,24.14,68.2-6.32,10.93-29.5,13.06-70.03,13.06h-1.12v3.4c41.22.04,64.77,2.15,71.13,13.19,6.36,11.04-3.62,32.47-24.27,68.15l2.94,1.7c20.64-35.67,34.24-55.01,46.98-55.01h.01c12.74.01,26.31,19.37,46.89,55.09l1.47-.85h0l1.47-.85c-20.58-35.72-30.52-57.17-24.14-68.2,6.32-10.93,29.5-13.06,70.03-13.06h1.12v-3.4c-41.22-.04-64.77-2.15-71.13-13.19h0ZM128.45,100.03h0ZM105.64,103.26c-.85,1.47-1.06,3.19-.7,5.31-1.65-1.38-3.25-2.06-4.95-2.06h0c-1.69,0-3.29.68-4.94,2.05.37-2.12.16-3.84-.69-5.31s-2.23-2.52-4.25-3.26c2.02-.74,3.41-1.78,4.26-3.25s1.06-3.19.7-5.31c1.65,1.38,3.25,2.06,4.95,2.06h0c1.69,0,3.29-.68,4.94-2.05-.37,2.12-.16,3.84.69,5.31s2.23,2.52,4.25,3.26c-2.02.74-3.41,1.78-4.26,3.25h0Z"
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

Abstract173.displayName = "Abstract173";
export { Abstract173 };
