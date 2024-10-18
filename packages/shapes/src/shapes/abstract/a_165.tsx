import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract165: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-165";

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
            d="M154.27,99.49l1.03-1.19,1.03-1.19c-18.19-15.75-29.72-27.15-37.53-37.31,7.81-10.17,19.34-21.56,37.53-37.31l-1.03-1.19-1.03-1.19c-18.38,15.92-31.57,24.45-43.32,27.66-6.69-12.34-9.38-25.27-9.38-45.26h-3.15c0,19.99-2.68,32.91-9.38,45.26-11.75-3.21-24.93-11.75-43.32-27.66l-1.03,1.19-1.03,1.19c18.18,15.75,29.72,27.15,37.53,37.31-7.81,10.17-19.34,21.57-37.53,37.31l2.06,2.38c18.38-15.92,31.57-24.45,43.32-27.66,5.72,10.56,8.5,21.57,9.19,37.03-.73,16.3-3.76,27.65-10.17,38.76-7.51,13.01-19.96,26.33-44.4,47.49l2.06,2.38c24.26-21.01,39.48-29.2,54.27-29.2s30.01,8.19,54.27,29.2l2.06-2.38c-24.44-21.16-36.89-34.48-44.4-47.49-6.41-11.11-9.44-22.46-10.17-38.76.69-15.46,3.46-26.48,9.19-37.03,11.75,3.21,24.93,11.75,43.32,27.66h0ZM129.81,174.95c-10.2-6.21-19.93-9.81-29.81-9.81s-19.62,3.6-29.81,9.81c18.46-18.67,26.71-32.98,29.81-51.7,3.1,18.72,11.35,33.03,29.81,51.7Z"
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

Abstract165.displayName = "Abstract165";
export { Abstract165 };
