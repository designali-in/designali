import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower22: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-22";

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
            d="M192.99,100c0-3.76-21.03-6.81-46.97-6.81-19.97,0-37.01,4.03-43.81,5.89,6.12-3.49,21.02-12.69,35.14-26.81,18.34-18.34,31.05-35.37,28.39-38.02-2.66-2.66-19.68,10.05-38.02,28.39-14.12,14.12-23.32,29.02-26.81,35.14,1.86-6.79,5.89-23.84,5.89-43.81,0-25.94-3.05-46.97-6.81-46.97s-6.81,21.03-6.81,46.97c0,19.97,4.03,37.01,5.89,43.81-3.49-6.12-12.69-21.02-26.81-35.14-18.34-18.34-35.37-31.05-38.02-28.39-2.66,2.66,10.05,19.68,28.39,38.02,14.12,14.12,29.02,23.32,35.14,26.81-6.79-1.86-23.84-5.89-43.81-5.89-25.94,0-46.97,3.05-46.97,6.81s21.03,6.81,46.97,6.81c19.97,0,37.01-4.03,43.81-5.89-6.12,3.49-21.02,12.69-35.14,26.81-18.34,18.34-31.05,35.37-28.39,38.02,2.66,2.66,19.68-10.05,38.02-28.39,14.12-14.12,23.32-29.02,26.81-35.14-1.86,6.79-5.89,23.84-5.89,43.81,0,25.94,3.05,46.97,6.81,46.97s6.81-21.03,6.81-46.97c0-19.97-4.03-37.01-5.89-43.81,3.49,6.12,12.69,21.02,26.81,35.14,18.34,18.34,35.37,31.05,38.02,28.39s-10.05-19.68-28.39-38.02c-14.12-14.12-29.02-23.32-35.14-26.81,6.79,1.86,23.84,5.89,43.81,5.89,25.94,0,46.97-3.05,46.97-6.81Z"
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

Flower22.displayName = "Flower22";
export { Flower22 };
