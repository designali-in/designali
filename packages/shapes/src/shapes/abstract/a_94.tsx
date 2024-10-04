import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract94: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-94";

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
            d="M141.51,182.97v-.16h14.56c21.47,0,26.62-12.46,11.43-27.68l-29.44-29.52c-20.85-20.9-37.9-13.82-37.9,15.75l-.33,41.62v-41.62c0-29.56-17.06-36.65-37.9-15.75l-29.44,29.52c-15.18,15.22-10.04,27.68,11.43,27.68h14.56v.16H2.97l97.03-97.29,97.03,97.29h-55.52ZM156.07,17.19h-14.56v-.16h55.52l-97.03,97.3L2.97,17.03h55.53v.16h-14.56c-21.47,0-26.62,12.45-11.43,27.68l29.44,29.52c20.84,20.91,37.9,13.82,37.9-15.74V17.03l.33,41.62c0,29.56,17.05,36.65,37.9,15.74l29.44-29.52c15.18-15.22,10.04-27.68-11.43-27.68Z"
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

Abstract94.displayName = "Abstract94";
export { Abstract94 };
