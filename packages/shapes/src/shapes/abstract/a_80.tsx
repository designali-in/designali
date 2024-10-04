import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract80: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-80";

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
            d="M162.02,63.17l34.31-23.64h-120.08L3.67,89.54h34.31L3.67,113.19h34.31L3.67,136.83h34.31L3.67,160.47h120.08l72.57-50.02h-34.31l34.31-23.64h-34.31l34.31-23.64h-34.31ZM15.36,85.9l62.02-42.74h107.26l-29.03,20.01h-79.36l-32.99,22.73H15.36ZM150.33,114.1l-27.71,19.1H49.67l27.71-19.1h72.95ZM49.67,109.55l27.71-19.1h72.95l-27.71,19.1H49.67ZM49.67,85.9l27.71-19.1h72.95l-27.71,19.1H49.67ZM15.36,109.55l29.03-20.01h27.9l-29.03,20.01H15.36ZM15.36,133.19l29.03-20.01h27.9l-29.03,20.01H15.36ZM184.64,114.1l-62.01,42.74H15.36l29.03-20.01h79.36l32.99-22.73h27.9ZM184.64,90.45l-29.03,20.01h-27.9l29.03-20.01h27.9ZM127.71,86.81l29.03-20.01h27.9l-29.03,20.01h-27.9Z"
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

Abstract80.displayName = "Abstract80";
export { Abstract80 };
