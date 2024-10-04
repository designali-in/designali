import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract11: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-11";

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
            d="M84.25,66.72V25l-53.93,31.31-2.24,1.3v65.21l22.47-13.04,13.48-7.82,13.49,7.82h0s-.01.01-.01.01l-62.92,36.52V49.77L97.75,1.5v73.06l-13.5-7.84ZM120.23,129.35v-15.65l62.93,36.52-83.16,48.27-83.17-48.27,62.94-36.53v15.67l-35.96,20.85,53.95,31.31,2.25,1.31,2.24-1.31,53.93-31.3-21.35-12.4-14.6-8.48ZM52.8,150.23l13.5-7.82,17.95,10.41v-44.34l-2.26-1.3h.01s-35.95-20.87-35.95-20.87v20.86l-13.49,7.82v-52.17l65.18,37.83v75.65l-44.95-26.08ZM153.92,107.16v-20.84l-18.56,10.78-14.15,8.2-3.25,1.87-1.36.79-.87.52v44.34l17.96-10.43,13.49,7.84-44.94,26.08v-75.65l65.18-37.83v52.17l-13.5-7.84ZM120.23,32.81l44.96,26.09h-.01s-65.18,37.84-65.18,37.84l-49.45-28.7-15.73-9.14,44.94-26.08v15.66l-17.96,10.42,17.96,10.42,17.99,10.44,2.25,1.3,2.24-1.3h0s17.98-10.44,17.98-10.44l17.94-10.42-17.94-10.43v-15.66ZM122.46,109.79l13.51-7.84,13.47,7.81,22.48,13.05V57.61l-2.24-1.3-53.94-31.32v41.74l-13.49,7.82V1.5l83.17,48.28v96.54l-62.95-36.52Z"
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

Abstract11.displayName = "Abstract11";
export { Abstract11 };
