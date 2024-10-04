import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract89: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-89";

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
            d="M27.86,196.2c-13.27,0-24.04-10.77-24.04-24.05s10.77-24.05,24.04-24.05,24.05,10.77,24.05,24.05-10.77,24.05-24.05,24.05ZM196.15,169.99c-.65,14.37-12.48,25.91-26.86,26.21-15.45.33-28.07-12.1-28.07-27.48,0-1.53.13-3.03.37-4.49.29-1.32.5-2.68.85-3.6.43-1.6.72-2.17,1.41-3.64,18.68-51.74,20.54-86.54-10.86-99.47l-8.54-2.93c-14.06-4.49-65.05-22.97-65.06,11.74.25,9.89-1.32,17.58,23.01,19.88,1.05.1,2.1.11,3.15.07.24,0,.47-.01.71-.01,1.78,0,3.51.18,5.2.5,0,0,.02,0,.03,0h0c12.9,2.49,22.59,13.99,22.24,27.7-.36,14.25-11.75,25.98-25.98,26.73-15.85.84-28.97-11.77-28.97-27.45-.92-18.88,6.04-29.19-24.27-27.68-1.06.12-2.13.19-3.21.19-15.18,0-27.48-12.31-27.48-27.48s12.3-27.49,27.48-27.49c1.29,0,2.55.1,3.78.27h0s.04,0,.06,0c1.76.25,3.46.66,5.1,1.22,26.27,6.98,51.13,14.06,79.02-18.25l1-1c.98-1.16,2.06-2.24,3.22-3.22l.04-.03c4.78-4.03,10.96-6.47,17.71-6.47,15.18,0,27.48,12.31,27.48,27.48,0,1.57-.13,3.1-.39,4.59-5.4,67.83,10.22,97.65,21.66,115.44,1.22,1.49,2.28,3.11,3.17,4.84.01.02.03.04.04.06h-.01c2.1,4.1,3.21,8.8,2.98,13.78Z"
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

Abstract89.displayName = "Abstract89";
export { Abstract89 };
