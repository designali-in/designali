import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract181: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-181";

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
            d="M100,2.73l-53.13,97.76,53.13,96.77,53.13-96.77L100,2.73ZM98.01,185.38l-44.66-81.34c2.5,1.47,6.65,2.67,12.67,3.7,8.62,1.48,19.92,2.33,31.99,2.41v75.22h0ZM98.01,106.17c-11.14-.08-21.69-.83-29.9-2.12-10.38-1.64-12.99-3.47-13.58-4.05.59-.58,3.2-2.41,13.58-4.05,8.21-1.3,18.77-2.04,29.9-2.12v12.35h0ZM98.01,89.85c-12.07.08-23.37.93-31.99,2.41-5.47.94-9.4,2.02-11.95,3.31L98.01,14.73v75.12h0ZM101.99,14.72l43.94,80.84c-2.55-1.29-6.48-2.37-11.95-3.31-8.62-1.48-19.92-2.33-31.99-2.41V14.73h0ZM101.99,93.83c11.14.08,21.69.83,29.9,2.12,10.38,1.64,12.99,3.47,13.58,4.05-.59.58-3.2,2.41-13.58,4.05-8.21,1.3-18.77,2.04-29.9,2.12v-12.35h0ZM101.99,110.15c12.07-.08,23.37-.93,31.99-2.41,6.01-1.03,10.17-2.23,12.67-3.7l-44.66,81.34v-75.22h0Z"
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

Abstract181.displayName = "Abstract181";
export { Abstract181 };
