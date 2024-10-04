import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract81: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-81";

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
            d="M150.97,182.77l-50.97-78.73-50.97,78.73-2.71-1.78,53.68-82.92,53.69,82.92-2.72,1.78ZM98.38,103.09V20.23h3.24v78.8l82.7-18.63.71,3.17-86.64,19.53ZM58.42,124.83l-1.51-2.88,38.43-20.28L14.97,83.56l.71-3.17,88.96,20.05-46.23,24.39ZM141.58,124.83l-39.96-21.08v50.51h-3.24v-55.9l44.71,23.59-1.51,2.88ZM100,103.41l-27.34-28.85,2.35-2.24,24.99,26.37,25-26.37,2.35,2.24-27.34,28.85ZM122.94,77.9l-22.94-46.65-22.94,46.65-51.29,7.48,37.11,36.31-8.76,51.27,45.87-24.2,45.88,24.2-8.76-51.27,37.11-36.31-51.29-7.48ZM147.56,125.09l11.23,65.7-58.79-31.02-58.78,31.02,11.23-65.7L4.89,78.57l65.72-9.59,29.39-59.78,29.39,59.78,65.72,9.59-47.56,46.52Z"
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

Abstract81.displayName = "Abstract81";
export { Abstract81 };
