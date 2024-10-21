import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower45: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-45";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="186"
          x="0"
          y="7"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.99,114.94s-17.7-31.44-40.6-36.34c15.62-16.9,23.93-33.79,23.93-33.79,0,0-34.75-9.72-54.4,3.02-.91-23-6.98-40.81-6.98-40.81,0,0-31.44,17.7-36.34,40.6-16.9-15.62-33.79-23.93-33.79-23.93,0,0-9.72,34.75,3.02,54.4-23,.91-40.81,6.98-40.81,6.98,0,0,17.7,31.44,40.6,36.34-15.62,16.9-23.93,33.79-23.93,33.79,0,0,34.75,9.72,54.4-3.02.91,23,6.98,40.81,6.98,40.81,0,0,31.44-17.7,36.34-40.6,16.9,15.62,33.79,23.93,33.79,23.93,0,0,9.72-34.75-3.02-54.4,23-.91,40.81-6.98,40.81-6.98ZM100,117.28c-9.54,0-17.28-7.74-17.28-17.28s7.74-17.28,17.28-17.28,17.28,7.74,17.28,17.28-7.74,17.28-17.28,17.28Z"
          ></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4711)"
            d="M200 0H0v200h200V0z"
          ></path>
          <g filter="url(#filter0_f_748_4711)">
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
          id="filter0_f_748_4711"
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
            result="effect1_foregroundBlur_748_4711"
            stdDeviation="27.5"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4711"
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

Flower45.displayName = "Flower45";
export { Flower45 };
