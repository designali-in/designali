import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract66: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-66";

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
            d="M163.11,166.81h-55.34l-20.64-20.65h67.42l37.32-37.3v29.2l-28.75,28.76ZM152.72,141.74h-29.19l47.69-47.68v-52.76l20.64,20.64v40.66l-39.14,39.13ZM138.05,191.86h-40.67l-39.13-39.13v-29.19l47.67,47.68h52.77l-20.65,20.64ZM61.95,191.86l-28.75-28.76v-55.34l20.64-20.65v67.44l37.3,37.3h-29.2ZM146.16,112.88V45.44L108.86,8.14h29.19l28.76,28.75v55.35l-20.64,20.64ZM94.06,28.78h-52.75l20.64-20.64h40.66l39.15,39.13v29.19l-47.69-47.68ZM45.44,53.84L8.14,91.15v-29.2l28.76-28.76h55.34l20.65,20.65H45.44ZM28.78,105.94v52.76l-20.65-20.64v-40.66l39.15-39.13h29.19l-47.69,47.68Z"
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

Abstract66.displayName = "Abstract66";
export { Abstract66 };
