import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract2: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-2";

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
            d="M37.46,136.91c-1.31-.36-2.64-.67-4.01-.88-3.26-.49-6.23-1.36-8.98-2.47L133.57,24.47c1.11,2.74,1.97,5.71,2.47,8.97.2,1.37.52,2.7.88,4.01l-99.45,99.45ZM14.35,127.36c-2.97-2.64-5.38-5.73-7.24-9.09L118.27,7.12c3.36,1.86,6.45,4.26,9.1,7.23L14.35,127.36ZM2.97,106.09c-.93-5.87-.49-11.94,1.29-17.61l23.05-23.05c1.94-.61,3.97-1.12,6.14-1.45,15.77-2.4,28.14-14.78,30.54-30.54.33-2.17.84-4.19,1.45-6.14l23.05-23.05c5.67-1.77,11.75-2.21,17.61-1.29L2.97,106.09ZM65.78,173.88c-.79-2.27-1.4-4.7-1.79-7.3-.3-2.01-.78-3.96-1.39-5.84l98.14-98.14c1.88.62,3.83,1.09,5.83,1.4,2.6.39,5.03,1,7.3,1.8l-108.1,108.09ZM56.97,150.04c-2.34-3.08-5.16-5.77-8.35-7.97l93.45-93.44c2.2,3.19,4.89,6.01,7.97,8.35l-93.07,93.07ZM196.6,108.35l-27.1,27.1c-.95.22-1.92.43-2.93.58-15.77,2.4-28.14,14.78-30.54,30.54-.16,1-.37,1.97-.58,2.93l-27.1,27.1c-5.38,1.18-11,1.2-16.39.06l104.7-104.69c1.14,5.38,1.12,11.01-.06,16.39ZM80.27,192.03c-3.24-2-6.18-4.55-8.68-7.65l112.79-112.78c3.09,2.49,5.65,5.43,7.65,8.68l-111.76,111.75Z"
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

Abstract2.displayName = "Abstract2";
export { Abstract2 };
