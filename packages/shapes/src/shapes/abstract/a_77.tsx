import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract77: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-77";

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
            d="M100.74,152.28c-14.68,0-26.44-4.74-35.27-14.22-8.82-9.47-13.22-22.12-13.22-37.94s4.4-28.67,13.22-38.06c8.83-9.4,20.58-14.09,35.27-14.09,12.86,0,23.41,3.5,31.66,10.5,8.25,7.01,13.03,16.52,14.35,28.56h-24.74c-1.83-12.37-8.91-18.54-21.28-18.54-7.59,0-13.45,2.72-17.57,8.16-4.13,5.43-6.18,13.27-6.18,23.48s2.05,17.79,6.18,23.23c4.12,5.43,9.98,8.16,17.57,8.16,6.09,0,11.09-1.64,14.97-4.94,3.87-3.3,6.22-8.08,7.05-14.34h24.25c-1.15,12.2-5.9,21.92-14.23,29.18-8.33,7.26-19.02,10.87-32.04,10.87ZM100,170.32c20.29,0,37.12-6.75,50.47-20.26,13.2-13.51,19.8-30.16,19.8-49.93s-6.6-36.5-19.8-50.18c-13.35-13.35-30.18-20.02-50.47-20.02s-36.79,6.67-49.99,20.02c-13.2,13.68-19.8,30.41-19.8,50.18s6.6,36.42,19.8,49.93c13.03,13.51,29.7,20.26,49.99,20.26ZM166.81,165.38c-17.82,17.8-40.08,26.7-66.81,26.7s-48.99-8.9-66.81-26.7C15.37,147.58,6.47,125.83,6.47,100.13s8.9-47.72,26.72-65.51C51.01,16.82,73.28,7.92,100,7.92s48.98,8.9,66.81,26.7c17.81,17.79,26.72,39.64,26.72,65.51s-8.91,47.79-26.72,65.25Z"
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

Abstract77.displayName = "Abstract77";
export { Abstract77 };
