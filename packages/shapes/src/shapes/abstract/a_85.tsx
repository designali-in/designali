import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract85: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-85";

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
            d="M133.41,188.85c-31.49,6.08-33.41-7.98-33.41-57.65,0,49.67-1.92,63.73-33.41,57.65-25.17-9.63-45.18-29.8-54.73-55.18-6.03-31.74,7.91-33.68,57.19-33.68-49.28,0-63.22-1.93-57.19-33.68,9.55-25.37,29.55-45.54,54.73-55.17,31.49-6.08,33.41,7.98,33.41,57.65,0-49.67,1.92-63.73,33.41-57.65,25.17,9.63,45.19,29.8,54.73,55.17,6.03,31.75-7.91,33.68-57.2,33.68,49.28,0,63.22,1.94,57.2,33.68-9.55,25.38-29.56,45.55-54.73,55.18M100,3.81C47.3,3.81,4.57,46.88,4.57,100s42.72,96.2,95.42,96.2,95.43-43.07,95.43-96.2S152.7,3.81,100,3.81"
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

Abstract85.displayName = "Abstract85";
export { Abstract85 };
