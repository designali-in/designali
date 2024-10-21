import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower39: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-39";

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
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M164.01,46.38c-4.75,0-10.51,2.13-16.26,5.87,3.75-5.75,5.87-11.51,5.87-16.26,0-16.01-24.01-28.98-53.62-28.98s-53.62,12.98-53.62,28.98c0,4.75,2.13,10.51,5.87,16.26-5.75-3.75-11.51-5.87-16.26-5.87-16.01,0-28.98,24.01-28.98,53.62s12.98,53.62,28.98,53.62c4.75,0,10.51-2.13,16.26-5.87-3.75,5.75-5.87,11.51-5.87,16.26,0,16.01,24.01,28.98,53.62,28.98s53.62-12.98,53.62-28.98c0-4.75-2.13-10.51-5.87-16.26,5.75,3.75,11.51,5.87,16.26,5.87,16.01,0,28.98-24.01,28.98-53.62s-12.98-53.62-28.98-53.62ZM125.93,121.72c-1.92,0-4.26-.86-6.59-2.38,1.52,2.33,2.38,4.66,2.38,6.59,0,6.48-9.72,11.74-21.72,11.74s-21.72-5.26-21.72-11.74c0-1.92.86-4.26,2.38-6.59-2.33,1.52-4.66,2.38-6.59,2.38-6.48,0-11.74-9.72-11.74-21.72s5.26-21.72,11.74-21.72c1.92,0,4.26.86,6.59,2.38-1.52-2.33-2.38-4.66-2.38-6.59,0-6.48,9.72-11.74,21.72-11.74s21.72,5.26,21.72,11.74c0,1.92-.86,4.26-2.38,6.59,2.33-1.52,4.66-2.38,6.59-2.38,6.48,0,11.74,9.72,11.74,21.72s-5.26,21.72-11.74,21.72Z"
          ></path>
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

Flower39.displayName = "Flower39";
export { Flower39 };
