import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract24: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-24";

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
            d="M159.12,73.87c-.92-2.09-1.97-4.15-3.14-6.17-1.16-2.02-2.43-3.95-3.78-5.8,10.92-4.12,18.11-5.5,19.43-3.23,1.31,2.27-3.48,7.81-12.51,15.2ZM155.3,114.81c-3.8,14.15-12.97,26.84-26.67,34.74-13.7,7.9-29.28,9.5-43.45,5.72-9.17-2.46-17.71-7.18-24.75-13.91,14.76-6.59,31.51-15.15,48.91-25.19,17.39-10.04,33.18-20.25,46.28-29.73,2.31,9.46,2.14,19.21-.32,28.38ZM50.42,128.61c-1.36-2.35-2.52-4.76-3.51-7.21-1.04-2.57-1.88-5.19-2.53-7.83-2.31-9.46-2.14-19.22.31-28.38,3.8-14.15,12.98-26.83,26.68-34.74,13.7-7.9,29.28-9.5,43.44-5.72,9.17,2.46,17.72,7.18,24.76,13.91,1.96,1.88,3.81,3.91,5.52,6.1,1.62,2.09,3.14,4.29,4.5,6.64,1.36,2.35,2.52,4.77,3.5,7.21-11.89,9.01-28.59,19.95-47.59,30.91-19,10.96-36.84,19.94-50.59,25.73-1.62-2.09-3.13-4.29-4.49-6.64ZM28.37,141.33c-1.31-2.27,3.47-7.81,12.51-15.2.93,2.09,1.97,4.15,3.14,6.18,1.17,2.02,2.44,3.95,3.78,5.8-10.92,4.12-18.12,5.49-19.43,3.23ZM193.08,46.3c-3.12-5.4-21.12-1.38-46.23,9.19-20.1-21.17-52.77-26.67-79.17-11.44-26.4,15.23-37.97,46.26-29.67,74.23-21.71,16.44-34.2,30.01-31.08,35.41,3.12,5.39,21.12,1.38,46.22-9.2,20.11,21.16,52.77,26.67,79.18,11.44,26.4-15.23,37.97-46.26,29.67-74.23,21.71-16.44,34.2-30.01,31.08-35.41Z"
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

Abstract24.displayName = "Abstract24";
export { Abstract24 };
