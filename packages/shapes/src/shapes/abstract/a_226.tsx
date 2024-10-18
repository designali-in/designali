import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract226: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-226";

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
            points="117.09 101.62 113.57 73.57 110.05 101.62 82.01 105.14 110.05 108.65 113.57 136.7 117.09 108.65 145.14 105.14 117.09 101.62"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="148.05 94.98 150.44 75.96 169.45 73.57 150.44 71.19 148.05 52.17 145.66 71.19 126.65 73.57 145.66 75.96 148.05 94.98"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="151.13 110.08 149.08 126.42 132.74 128.47 149.08 130.52 151.13 146.86 153.18 130.52 169.52 128.47 153.18 126.42 151.13 110.08"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M132.37,35.26c-11.79,0-22.84,3.16-32.37,8.66-9.52-5.5-20.58-8.66-32.37-8.66C31.88,35.26,2.9,64.25,2.9,100s28.98,64.73,64.73,64.73c11.79,0,22.85-3.15,32.37-8.66,9.52,5.51,20.58,8.66,32.37,8.66,35.75,0,64.73-28.98,64.73-64.73s-28.98-64.74-64.73-64.74ZM132.37,159.96c-10.02,0-19.47-2.46-27.77-6.81-19.14-10.02-32.19-30.06-32.19-53.15s13.05-43.14,32.19-53.15c8.3-4.35,17.75-6.81,27.77-6.81,33.11,0,59.96,26.85,59.96,59.96s-26.85,59.96-59.96,59.96Z"
          />
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4808)"
            d="M200 0H0v200h200V0z"
          ></path>
          <g filter="url(#filter0_f_748_4808)">
            <path fill="#FF58E4" d="M130 0H69v226h61V0z"></path>
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h114V91z"
            ></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M226 80H28v120h85V80z"
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

Abstract226.displayName = "Abstract226";
export { Abstract226 };
