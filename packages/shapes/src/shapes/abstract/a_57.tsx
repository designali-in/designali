import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract57: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-57";

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
            d="M100.32,118.36c-10.14,0-18.36-8.22-18.36-18.36s8.22-18.36,18.36-18.36,18.36,8.22,18.36,18.36-8.22,18.36-18.36,18.36ZM179.29,145.12c-1.16,21.44-19.49,37.88-40.93,36.72l-7.81-.43c15.96-6.4,27.13-19.22,27.96-34.54,1.25-23.03-9.2-41.73-35.86-43.77l19.92,1.08c21.44,1.16,37.88,19.49,36.72,40.93ZM184.99,130.74l-5.83,5.22c6.75-15.81,5.59-32.78-4.65-44.19-15.4-17.16-36.01-23-56.3-5.59l14.85-13.32c15.98-14.34,40.57-13.01,54.91,2.98,14.34,15.98,13.01,40.56-2.98,54.91ZM181.83,61.64l-.42,7.81c-6.41-15.96-19.22-27.13-34.54-27.97-23.03-1.25-41.73,9.2-43.76,35.86l1.08-19.92c1.16-21.44,19.49-37.88,40.93-36.72,21.45,1.16,37.88,19.49,36.72,40.93ZM91.77,25.49c-17.17,15.4-23.01,36.01-5.6,56.31l-13.32-14.85c-14.34-15.98-13.01-40.56,2.98-54.9,15.98-14.34,40.57-13.01,54.91,2.98l5.23,5.82c-15.82-6.76-32.78-5.59-44.2,4.65ZM41.49,53.13c-1.25,23.03,9.2,41.73,35.86,43.76l-19.92-1.08c-21.44-1.16-37.88-19.49-36.72-40.93,1.16-21.45,19.49-37.88,40.93-36.72l7.81.43c-15.96,6.41-27.13,19.22-27.96,34.54ZM66.94,127.14c-15.98,14.34-40.57,13.01-54.91-2.98-14.34-15.98-13.01-40.57,2.98-54.91l5.83-5.23c-6.75,15.82-5.6,32.78,4.65,44.2,15.4,17.17,36.01,23,56.3,5.59l-14.85,13.33ZM95.81,142.57c-1.16,21.45-19.49,37.88-40.93,36.72-21.45-1.16-37.88-19.49-36.72-40.93l.42-7.81c6.41,15.96,19.22,27.13,34.54,27.96,23.03,1.25,41.73-9.2,43.76-35.86l-1.08,19.92ZM124.17,187.97c-15.98,14.34-40.57,13.01-54.91-2.98l-5.23-5.83c15.82,6.76,32.78,5.59,44.2-4.65,17.17-15.4,23.01-36.01,5.6-56.3l13.32,14.85c14.34,15.98,13.01,40.57-2.98,54.91Z"
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

Abstract57.displayName = "Abstract57";
export { Abstract57 };
