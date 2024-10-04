import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract38: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-38";

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
          <circle
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            cx="100"
            cy="26.56"
            r="17.26"
          />
          <circle
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            cx="100"
            cy="173.44"
            r="17.26"
          />
          <circle
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            cx="26.56"
            cy="100"
            r="17.26"
          />
          <circle
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            cx="173.44"
            cy="100"
            r="17.26"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M173.26,156.19c-8.68.1-17.08-3.07-23.23-9.21l-23.58-23.58c-6.16-6.16-9.26-14.58-9.21-23.29,0-.07,0-.15,0-.22-.06-8.71,3.05-17.13,9.21-23.29l23.63-23.63c6.15-6.15,14.59-9.19,23.29-9.15,4.54.02,9.09-1.74,12.5-5.29,6.22-6.46,6.38-16.93.34-23.56-6.68-7.34-18.05-7.55-24.99-.61-3.42,3.42-5.1,7.91-5.05,12.39.1,8.68-3.07,17.08-9.21,23.23l-23.58,23.58c-6.16,6.16-14.58,9.26-23.29,9.21-.07,0-.15,0-.22,0-8.71.06-17.13-3.05-23.29-9.21l-23.63-23.63c-6.15-6.15-9.19-14.59-9.15-23.29.02-4.54-1.74-9.09-5.29-12.5-6.46-6.22-16.93-6.38-23.56-.34-7.34,6.68-7.55,18.05-.61,24.99,3.42,3.42,7.91,5.1,12.39,5.05,8.68-.1,17.08,3.07,23.23,9.21l23.58,23.58c6.16,6.16,9.26,14.58,9.21,23.29,0,.07,0,.15,0,.22.06,8.71-3.05,17.13-9.21,23.29l-23.63,23.63c-6.15,6.15-14.59,9.19-23.29,9.15-4.54-.02-9.09,1.74-12.5,5.29-6.22,6.46-6.38,16.93-.34,23.56,6.68,7.34,18.05,7.55,24.99.61,3.42-3.42,5.1-7.91,5.05-12.39-.1-8.68,3.07-17.08,9.21-23.23l23.58-23.58c6.16-6.16,14.58-9.26,23.29-9.21.07,0,.15,0,.22,0,8.71-.06,17.13,3.05,23.29,9.21l23.63,23.63c6.15,6.15,9.19,14.59,9.15,23.29-.02,4.54,1.74,9.09,5.29,12.5,6.46,6.22,16.93,6.38,23.56.34,7.34-6.68,7.55-18.05.61-24.99-3.42-3.42-7.91-5.1-12.39-5.05Z"
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

Abstract38.displayName = "Abstract38";
export { Abstract38 };
