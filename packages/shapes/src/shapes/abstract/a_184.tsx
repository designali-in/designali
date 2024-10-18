import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract184: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-184";

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
            d="M166.39,136.04c-10.82-6.3-19.7-11.47-27.16-15.5-14.35-8.76-21.99-14.98-22-20.58-.01-5.6,7.6-11.85,21.91-20.68,7.44-4.06,16.3-9.27,27.09-15.62,5.92-3.48,12.62-7.43,19.81-11.6l-1.73-2.98c-7.19,4.17-13.94,8.04-19.9,11.45-10.86,6.22-19.79,11.32-27,15.77-14.76,8.04-23.97,11.56-28.83,8.77-4.86-2.79-6.46-12.51-6.95-29.31.2-8.47.12-18.75.01-31.27-.06-6.87-.12-14.65-.14-22.96h-3.45c.02,8.32-.01,16.1-.04,22.97-.05,12.52-.09,22.8.16,31.27-.42,16.81-1.98,26.54-6.82,29.35-4.84,2.81-14.07-.66-28.86-8.64-7.23-4.41-16.18-9.48-27.07-15.65-5.97-3.38-12.75-7.22-19.95-11.36l-1.72,2.99c7.21,4.14,13.93,8.06,19.87,11.51,10.82,6.3,19.7,11.47,27.16,15.5,14.35,8.76,21.99,14.98,22,20.58.01,5.6-7.6,11.85-21.91,20.68-7.44,4.06-16.3,9.27-27.09,15.62-5.92,3.48-12.62,7.43-19.81,11.6l1.73,2.98c7.19-4.17,13.94-8.04,19.9-11.45,10.86-6.22,19.79-11.32,27-15.77,14.76-8.04,23.97-11.55,28.82-8.77,4.86,2.79,6.46,12.51,6.95,29.31-.2,8.47-.12,18.75-.01,31.27.06,6.87.12,14.65.14,22.96h3.45c-.02-8.32.01-16.1.04-22.97.05-12.52.09-22.8-.16-31.27.42-16.81,1.98-26.54,6.82-29.35,4.84-2.81,14.07.66,28.86,8.64,7.23,4.41,16.18,9.48,27.07,15.65,5.97,3.38,12.75,7.22,19.95,11.36l1.72-2.99c-7.21-4.14-13.93-8.06-19.87-11.51h0Z"
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

Abstract184.displayName = "Abstract184";
export { Abstract184 };
