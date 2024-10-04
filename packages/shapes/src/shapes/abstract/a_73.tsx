import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract73: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-73";

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
            d="M191.89,94.94h-62.98c-6.16,0-9.24-7.44-4.89-11.8l44.53-44.53c1.98-1.98,1.98-5.19,0-7.16-1.98-1.98-5.19-1.98-7.16,0l-44.53,44.53c-4.35,4.35-11.8,1.27-11.8-4.89V8.11c0-2.8-2.27-5.07-5.06-5.07s-5.07,2.27-5.07,5.07v62.98c0,6.16-7.44,9.24-11.79,4.89L38.61,31.44c-1.98-1.98-5.19-1.98-7.17,0-1.98,1.98-1.98,5.19,0,7.16l44.53,44.53c4.35,4.35,1.27,11.8-4.89,11.8H8.11c-2.8,0-5.07,2.27-5.07,5.06s2.27,5.07,5.07,5.07h62.97c6.16,0,9.24,7.44,4.89,11.79l-44.53,44.53c-1.98,1.98-1.98,5.19,0,7.17,1.98,1.98,5.19,1.98,7.17,0l44.53-44.54c4.35-4.35,11.79-1.27,11.79,4.89v62.98c0,2.8,2.27,5.07,5.07,5.07s5.06-2.27,5.06-5.07v-62.97c0-6.16,7.44-9.24,11.8-4.89l44.53,44.54c1.98,1.98,5.19,1.98,7.16,0,1.98-1.98,1.98-5.19,0-7.17l-44.53-44.53c-4.35-4.35-1.27-11.79,4.89-11.79h62.98c2.8,0,5.07-2.27,5.07-5.07s-2.27-5.06-5.07-5.06Z"
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

Abstract73.displayName = "Abstract73";
export { Abstract73 };
