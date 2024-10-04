import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract49: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-49";

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
            d="M192.94,51.01L148.99,7.06l-48.99,48.99L51.01,7.06,7.06,51.01l48.99,48.99L7.06,148.99l43.95,43.95,32.61-32.62c6.69-6.69,10.38-15.59,10.38-25.06s-3.69-18.37-10.38-25.06l-10.21-10.21,26.58-26.58,26.58,26.58-10.21,10.21c-13.82,13.82-13.82,36.3,0,50.12l32.62,32.61,43.95-43.95-48.99-48.99,48.99-48.99ZM74.94,118.89c4.37,4.37,6.78,10.19,6.78,16.37s-2.41,12-6.78,16.37l-23.93,23.93-26.58-26.58,40.3-40.3,10.21,10.21ZM64.73,91.31L24.43,51.01l26.58-26.58,40.3,40.3-26.58,26.58ZM108.69,64.73l40.3-40.3,26.58,26.58-40.3,40.3-26.58-26.58ZM175.57,148.99l-26.58,26.58-23.93-23.93c-9.03-9.03-9.03-23.72,0-32.75l10.21-10.21,40.3,40.3Z"
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

Abstract49.displayName = "Abstract49";
export { Abstract49 };
