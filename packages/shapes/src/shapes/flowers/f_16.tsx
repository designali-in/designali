import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower16: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-16";

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
            d="M172.94,102.59c-2.06-1.19-4.39-2.04-6.88-2.59,2.49-.55,4.82-1.4,6.88-2.59,13.64-7.88,15.47-30.26,7.59-43.91-7.88-13.64-28.18-23.26-41.82-15.38-2.06,1.19-3.96,2.78-5.68,4.67.77-2.43,1.2-4.87,1.2-7.25,0-15.75-18.48-28.52-34.23-28.52s-34.23,12.77-34.23,28.52c0,2.38.43,4.82,1.2,7.25-1.72-1.88-3.62-3.48-5.68-4.67-13.64-7.88-33.94,1.74-41.82,15.38-7.88,13.64-6.05,36.03,7.59,43.91,2.06,1.19,4.39,2.04,6.88,2.59-2.49.55-4.82,1.4-6.88,2.59-13.64,7.88-15.47,30.26-7.59,43.91,7.88,13.64,28.18,23.26,41.82,15.38,2.06-1.19,3.96-2.78,5.68-4.67-.77,2.43-1.2,4.87-1.2,7.25,0,15.75,18.48,28.52,34.23,28.52s34.23-12.77,34.23-28.52c0-2.38-.43-4.82-1.2-7.25,1.72,1.88,3.62,3.47,5.68,4.67,13.64,7.88,33.94-1.74,41.82-15.38,7.88-13.64,6.05-36.03-7.59-43.91ZM151.25,101.82c9.59,5.53,10.87,21.26,5.33,30.85-5.53,9.59-19.79,16.34-29.38,10.81-1.45-.84-2.78-1.95-3.99-3.28.54,1.71.84,3.42.84,5.1,0,11.07-12.98,20.04-24.05,20.04s-24.05-8.97-24.05-20.04c0-1.67.3-3.39.84-5.1-1.21,1.32-2.54,2.44-3.99,3.28-9.59,5.53-23.85-1.22-29.38-10.81-5.53-9.58-4.25-25.31,5.33-30.85,1.45-.84,3.08-1.43,4.83-1.82-1.75-.39-3.39-.98-4.83-1.82-9.58-5.53-10.87-21.26-5.33-30.85,5.53-9.58,19.79-16.34,29.38-10.81,1.45.84,2.78,1.95,3.99,3.28-.54-1.71-.84-3.42-.84-5.1,0-11.07,12.98-20.04,24.05-20.04s24.05,8.97,24.05,20.04c0,1.67-.3,3.39-.84,5.1,1.21-1.32,2.54-2.44,3.99-3.28,9.59-5.53,23.85,1.22,29.38,10.81,5.53,9.59,4.25,25.31-5.33,30.85-1.45.84-3.08,1.43-4.83,1.82,1.75.39,3.39.98,4.83,1.82Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118.11,89.55c-3.08-5.34-2.94-13.23-.53-20.08-4.73,5.51-11.49,9.58-17.66,9.58s-12.93-4.07-17.66-9.58c2.41,6.85,2.55,14.75-.53,20.08-3.08,5.34-9.99,9.16-17.13,10.5,7.14,1.34,14.05,5.16,17.13,10.5,3.08,5.34,2.94,13.23.53,20.08,4.73-5.51,11.49-9.58,17.66-9.58s12.93,4.07,17.66,9.58c-2.41-6.85-2.55-14.75.53-20.08,3.08-5.34,9.99-9.16,17.13-10.5-7.14-1.34-14.05-5.16-17.13-10.5Z"
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

Flower16.displayName = "Flower16";
export { Flower16 };
