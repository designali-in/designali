import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract182: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-182";

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
            d="M106.69,100.48c12.31-1.54,41.7-8.67,90.19-16.87-48.49,8.2-78.63,11.14-90.75,13.73,10.15-7.03,32.77-26.88,71.76-56.49-38.98,29.6-64.22,46.08-73.71,53.97,5.68-10.9,16.4-38.87,37.02-83-20.62,44.13-35.22,70.33-39.92,81.67-.07-12.24-3.66-41.87-6.05-90.33,2.39,48.46,1.73,78.32,2.87,90.5-5.78-10.76-22.82-35.2-47.6-76.8,24.78,41.6,38.16,68.23,44.86,78.44-10.16-6.79-36.69-20.39-78.1-45.51,41.42,25.13,65.72,42.36,76.44,48.23-12.18-1.24-42.08-.83-90.57-3.64,48.49,2.8,78.11,6.65,90.36,6.82-11.4,4.61-37.77,18.99-82.15,39.24,44.38-20.25,72.48-30.73,83.45-36.33-7.99,9.43-24.74,34.54-54.77,73.29,30.03-38.75,50.13-61.22,57.27-71.31-2.73,12.11-5.98,42.25-14.7,90.72,8.72-48.47,16.17-77.82,17.83-90.13,3.18,12.04,14.22,40.36,28.88,87.53-14.66-47.16-21.62-76.73-25.83-88.46,8.37,9.23,31.23,29.31,65.98,64.45-34.76-35.14-54.58-58.22-63.71-66.69,11.67,4.33,41.14,11.61,88.11,26.77-46.97-15.16-75.15-26.51-87.15-29.81h0Z"
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

Abstract182.displayName = "Abstract182";
export { Abstract182 };
