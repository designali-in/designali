import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower35: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-35";

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
            d="M86.21,92.6c3.89-2.77,8.65-4.41,13.79-4.41s9.9,1.64,13.79,4.41c8-5.12,17.5-8.1,27.71-8.1,1.81,0,3.6.1,5.36.28,2.81-6.36,4.38-13.38,4.38-20.77,0-28.44-23.05-51.49-51.49-51.49s-51.49,23.05-51.49,51.49c0,7.42,1.58,14.46,4.4,20.83,1.92-.22,3.87-.34,5.84-.34,10.2,0,19.7,2.98,27.71,8.1Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90.07,133.63c-8.19-3.76-13.87-12.03-13.87-21.63,0-.73.04-1.44.1-2.15-10.47-5.37-18.85-14.21-23.64-25-25.69,2.9-45.65,24.69-45.65,51.15,0,28.44,23.05,51.49,51.49,51.49,17.03,0,32.13-8.28,41.5-21.02-6.28-8.53-9.99-19.07-9.99-30.47,0-.79.02-1.58.06-2.36Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.86,84.78c-4.71,10.66-12.91,19.41-23.17,24.81.08.79.12,1.59.12,2.4,0,9.6-5.69,17.87-13.87,21.63.04.78.06,1.57.06,2.36,0,11.41-3.71,21.94-9.99,30.47,9.37,12.74,24.47,21.02,41.5,21.02,28.44,0,51.49-23.05,51.49-51.49,0-26.63-20.21-48.53-46.13-51.21Z"
          />

          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M123.69,109.59c-.7-7.01-4.45-13.11-9.89-16.99-3.89-2.77-8.65-4.41-13.79-4.41s-9.9,1.64-13.79,4.41c-5.51,3.92-9.27,10.13-9.91,17.24-.06.71-.1,1.43-.1,2.15,0,9.6,5.69,17.87,13.87,21.63,3.02,1.39,6.39,2.17,9.93,2.17s6.91-.78,9.93-2.17c8.19-3.76,13.87-12.03,13.87-21.63,0-.81-.04-1.61-.12-2.4Z"
          />
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

Flower35.displayName = "Flower35";
export { Flower35 };
