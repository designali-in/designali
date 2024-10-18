import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract230: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-230";

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
            d="M159.15,101.84l14.66-1.84-14.66-1.84c27.2-19.48,42.8-38.06,37.86-47.72-6.46-12.64-45.91-5.74-92.08,15.02l-4.93-39.28-4.93,39.28C48.9,44.7,9.44,37.81,2.99,50.44c-4.93,9.65,10.66,28.23,37.86,47.72l-14.66,1.84,14.66,1.84C13.65,121.32-1.94,139.9,2.99,149.56c6.46,12.64,45.91,5.74,92.08-15.02l4.93,39.28,4.93-39.28c46.17,20.76,85.63,27.66,92.08,15.02,4.93-9.65-10.66-28.23-37.86-47.71h0ZM79.29,106.67c7.34.92,13.12,6.7,14.05,14.05l.55,4.36c-1.77-.86-3.55-1.74-5.33-2.65-11.43-5.84-21.86-12.14-30.84-18.46l21.58,2.71h0ZM57.71,96.04c8.98-6.32,19.41-12.62,30.84-18.46,1.78-.91,3.56-1.79,5.33-2.65l-.55,4.36c-.92,7.34-6.7,13.12-14.05,14.05l-21.58,2.71ZM106.67,120.71c.92-7.34,6.7-13.12,14.05-14.05l21.58-2.71c-8.98,6.32-19.41,12.62-30.84,18.46-1.78.91-3.56,1.79-5.33,2.65l.55-4.36h0ZM106.12,74.93c1.77.86,3.55,1.74,5.33,2.65,11.43,5.84,21.86,12.14,30.84,18.46l-21.58-2.71c-7.34-.92-13.12-6.7-14.05-14.05l-.55-4.36ZM174.69,61.85c3.91,7.65-5.41,20.93-22.84,34.93-11.4-7.66-24.47-15.36-38.66-22.61-2.56-1.31-5.11-2.58-7.65-3.81l-.09-.71c34.41-14.72,63.79-18.47,69.23-7.8h0ZM25.31,61.85c5.45-10.67,34.83-6.91,69.23,7.8l-.09.71c-2.54,1.23-5.09,2.5-7.65,3.81-14.19,7.25-27.25,14.94-38.66,22.61-17.42-14-26.75-27.28-22.84-34.93h0ZM25.31,138.15c-3.91-7.65,5.41-20.93,22.84-34.93,11.4,7.66,24.47,15.36,38.66,22.61,2.56,1.31,5.11,2.58,7.65,3.81l.09.71c-34.41,14.72-63.79,18.47-69.23,7.8ZM174.69,138.15c-5.45,10.67-34.83,6.91-69.23-7.8l.09-.71c2.54-1.23,5.09-2.5,7.65-3.81,14.19-7.25,27.25-14.94,38.66-22.61,17.42,14,26.75,27.28,22.84,34.93h0Z"
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
            <path fill="#FF58E4" d="M130 0H69v2303h61V0z"></path>
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h2304V91z"
            ></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M2303 80H28v120h85V80z"
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

Abstract230.displayName = "Abstract230";
export { Abstract230 };
