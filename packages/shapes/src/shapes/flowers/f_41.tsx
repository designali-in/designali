import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower41: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-41";

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
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="180.53 146.5 158.43 119.28 104.39 101.18 160.24 112.52 192.99 100 160.24 87.48 104.39 98.82 158.43 80.72 180.53 53.5 145.91 59.03 103.21 96.79 140.97 54.09 146.5 19.47 119.28 41.57 101.18 95.61 112.52 39.76 100 7.01 87.48 39.76 98.82 95.61 80.72 41.57 53.5 19.47 59.03 54.09 96.79 96.79 54.09 59.03 19.47 53.5 41.57 80.72 95.61 98.82 39.76 87.48 7.01 100 39.76 112.52 95.61 101.18 41.57 119.28 19.47 146.5 54.09 140.97 96.79 103.21 59.03 145.91 53.5 180.53 80.72 158.43 98.82 104.39 87.48 160.24 100 192.99 112.52 160.24 101.18 104.39 119.28 158.43 146.5 180.53 140.97 145.91 103.21 103.21 145.91 140.97 180.53 146.5"
          />
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

Flower41.displayName = "Flower41";
export { Flower41 };
