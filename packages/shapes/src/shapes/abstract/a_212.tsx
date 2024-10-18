import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract212: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-212";

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
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="70.13 86.06 57.2 115.18 33.63 115.18 20.6 144.52 44.31 144.52 57.24 115.4 80.67 115.4 67.74 144.52 91.45 144.52 104.47 115.18 80.9 115.18 93.84 86.06 70.41 86.06 83.43 56.72 59.72 56.72 46.7 86.06 70.13 86.06"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="177.94 56.72 154.23 56.72 141.21 86.06 164.91 86.06 177.94 56.72"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="104.47 115.4 128.04 115.4 115.11 144.52 138.82 144.52 151.85 115.18 128.28 115.18 141.21 86.06 117.54 86.06 130.57 56.72 106.86 56.72 93.84 86.06 117.5 86.06 104.47 115.4"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M196.25,49.55c-.37-.56-.99-.9-1.66-.9H49.02c-.78,0-1.49.46-1.81,1.18L3.6,148.57c-.27.61-.21,1.32.15,1.88.37.56.99.9,1.66.9h145.57c.78,0,1.49-.46,1.81-1.18l43.62-98.74c.27-.61.21-1.32-.15-1.88h0ZM149.69,147.39H8.44L50.31,52.61h141.24l-41.87,94.78h0Z"
          />
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

Abstract212.displayName = "Abstract212";
export { Abstract212 };
