import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract7: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-7";

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
            d="M140.26,140.26l-28.47-28.47c15.72-15.72,41.22-15.72,56.94,0l-28.47,28.47ZM140.26,140.26l28.47-28.47,28.47,28.47h-56.94ZM111.79,168.73c-15.72-15.72-15.72-41.22,0-56.94l28.47,28.47-28.47,28.47ZM111.79,168.73l28.47-28.47v56.94l-28.47-28.47ZM88.21,168.73l-28.47-28.47,28.47-28.47c15.72,15.72,15.72,41.22,0,56.94ZM59.74,197.2v-56.94l28.47,28.47-28.47,28.47ZM59.74,140.26l-28.47-28.47c15.72-15.72,41.22-15.72,56.94,0l-28.47,28.47ZM2.8,140.26l28.47-28.47,28.47,28.47H2.8ZM111.79,88.21l28.47-28.47,28.47,28.47c-15.72,15.72-41.22,15.72-56.94,0ZM168.73,88.21l-28.47-28.47h56.94l-28.47,28.47ZM111.79,88.21c-15.72-15.72-15.72-41.22,0-56.94l28.47,28.47-28.47,28.47ZM111.79,31.27l28.47-28.47v56.94l-28.47-28.47ZM88.21,88.21l-28.47-28.47,28.47-28.47c15.72,15.72,15.72,41.22,0,56.94ZM59.74,59.74V2.8l28.47,28.47-28.47,28.47ZM31.27,88.21l28.47-28.47,28.47,28.47c-15.72,15.72-41.22,15.72-56.94,0ZM31.27,88.21L2.8,59.74h56.94l-28.47,28.47Z"
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

Abstract7.displayName = "Abstract7";
export { Abstract7 };
