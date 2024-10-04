import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract125: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-125";

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
            d="M100,196.96c38.85,0,72.36-22.81,87.86-55.76H12.14c15.5,32.95,49.01,55.76,87.85,55.76ZM4.07,114.7h191.85c.49-3.23.82-6.51.98-9.84H3.09c.16,3.33.49,6.61.98,9.84ZM191.8,68.51H8.2c-1.1,3.21-2.04,6.49-2.81,9.84h189.2c-.76-3.35-1.7-6.63-2.8-9.84ZM196.14,86.88H3.86c-.42,3.11-.69,6.26-.81,9.46h193.91c-.12-3.2-.39-6.36-.81-9.46ZM100,3.04C60.69,3.04,26.83,26.41,11.59,59.99h176.82C173.17,26.41,139.31,3.04,100,3.04ZM5.78,123.22h188.45c-.79,3.22-1.74,6.37-2.85,9.46H8.62c-1.11-3.08-2.06-6.24-2.85-9.46Z"
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

Abstract125.displayName = "Abstract125";
export { Abstract125 };
