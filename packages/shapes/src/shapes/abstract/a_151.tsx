import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract151: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-151";

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
            d="M116.28,69.07l-16.98-33.38-36.47-1.21-7.99-20.42,58.02,1.92,27.41,53.88-23.99-.8ZM167.02,1514.28l-60.7-1.66,12.12-20.6,37.6,1.02,18.42-31.33,21.86,2.73-29.3,49.84ZM147.02,123.37l-11.09-21.17,20.9-31.11-16.86-32.19,13.97-16.96,26.82,51.21-33.73,50.21ZM81.48,70.37l-37.6-.91-18.33,31.39-21.87-2.66,29.16-49.93,60.7,1.48-12.06,20.64ZM43.13,136.31l17.45,31.87-13.65,17.21-27.76-50.71,32.8-50.81,11.48,20.96-20.32,31.49ZM88.82,185.04l-28.37-53.39,24,.37,17.58,33.07,36.49.56,8.35,20.28-58.05-.9Z"
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

Abstract151.displayName = "Abstract151";
export { Abstract151 };
