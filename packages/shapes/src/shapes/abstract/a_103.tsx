import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract103: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-103";

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
            d="M43.17,3.06h56.83c0,53.54-43.42,96.94-96.97,96.94v-56.81c0,22.16,17.98,40.12,40.14,40.12s40.13-17.96,40.13-40.12S65.33,3.06,43.17,3.06ZM43.17,196.94c22.16,0,40.13-17.96,40.13-40.12s-17.97-40.12-40.13-40.12S3.04,134.65,3.03,156.81v-56.81c53.55,0,96.97,43.4,96.97,96.94h-56.83ZM100,3.06h56.83c-22.17,0-40.14,17.96-40.14,40.12s17.97,40.12,40.14,40.12,40.13-17.96,40.13-40.12v56.81c-53.55,0-96.96-43.4-96.96-96.94ZM156.84,116.69c-22.17,0-40.14,17.96-40.14,40.12s17.97,40.12,40.14,40.12h-56.83c0-53.54,43.41-96.94,96.96-96.94v56.81c0-22.16-17.97-40.12-40.13-40.12Z"
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

Abstract103.displayName = "Abstract103";
export { Abstract103 };
