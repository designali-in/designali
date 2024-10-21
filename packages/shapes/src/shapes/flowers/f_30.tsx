import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower30: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-30";

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
            d="M100.07,63.45c4.16-7.01,10.02-13.45,17.41-18.64,6.88-4.83,14.32-8.03,21.78-9.7-3.42-8.27-8.59-15.33-14.95-20.45-3.4-2.74-7.15-4.93-11.14-6.46l-13.49,17.91-13.49-17.91c-11.18,4.29-20.42,13.77-25.74,26.06,7.72,1.73,15.44,5.13,22.51,10.27,7.3,5.31,13.06,11.85,17.1,18.92Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M65.95,92.55c-6.49-9.2-10.41-21.07-10.41-34.05,0-8.74,1.78-16.98,4.92-24.24-8.4-1.88-16.82-1.79-24.42.27-4.22,1.14-8.19,2.88-11.77,5.21l6.54,21.44-22.42.37c-4.4,16.35,1.88,35.66,16.7,49.48,11.53-12.31,26.7-18.72,40.86-18.48Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.67,111.31c-.22,0-.44-.02-.66-.02.1.17.21.34.3.51.12-.16.25-.31.37-.47,0,0,0-.01-.01-.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.97,111.71c-.12.2-.24.41-.36.62,6.92,12.68,6.78,29.27-.35,44.35,2.39,5.2,5.6,10.23,9.64,14.87,12,13.76,28.42,20.8,43.53,20.21,4.37-.17,8.62-.99,12.64-2.45l-1.6-22.36,21.94,4.63c8.92-16.83,5.52-40.32-9.95-58.06-.39-.44-.78-.87-1.18-1.3-1.88,1.7-3.88,3.32-6.02,4.82-23.69,16.65-54.13,14.23-68.28-5.33Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.9,75.87c.29-4.36-.08-8.68-1.12-12.82l-22.41-.74,6.9-21.33c-10.16-6.83-23.59-8.86-37.01-5.86,2.92,7.05,4.57,14.98,4.57,23.39,0,13.34-4.14,25.51-10.96,34.8,14.36-.26,29.77,6.31,41.4,18.93,11.24-10.15,17.78-23.43,18.62-36.36Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.68,111.33c.09.13.19.25.29.39.08-.14.16-.28.24-.42-.17,0-.34.02-.52.02,0,0,0,.01-.01.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.7,111.31s0,0,0-.01c9.9-13.61,9.39-32.08.37-47.85-9.28,15.63-10.09,34.08-.41,47.85,0,0,0,0,0,.01,0,0,0,0,.01,0s0,0,.01,0Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.22,111.29c13.02-.18,24.68-7.11,32.66-17.99-9.37.17-18.29,3.23-25.41,9.44-2.89,2.52-5.3,5.4-7.25,8.56Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.61,112.33c-.1-.18-.2-.35-.3-.53-14.5,19.24-44.91,21.14-68.29,4.13-2.11-1.54-4.09-3.18-5.94-4.91-.65.69-1.28,1.4-1.91,2.12-11.88,13.87-16.47,31.13-13.69,45.99.8,4.3,2.22,8.39,4.26,12.15l21.89-4.82-1.41,22.38c17.94,6.39,40.69-.38,56.01-18.26,3.73-4.36,6.73-9.05,9.02-13.9-6.97-15.16-6.89-31.77.35-44.35Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M91.07,101.76c-7.07-6.06-15.88-9.05-25.12-9.21,7.96,11.28,19.8,18.5,33.06,18.74-2.08-3.55-4.72-6.77-7.95-9.53Z"
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

Flower30.displayName = "Flower30";
export { Flower30 };
