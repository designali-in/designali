import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract153: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-153";

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
            d="M99.98,113.99c-7.84,0-14.19-6.26-14.19-14s6.35-13.99,14.19-13.99,14.19,6.26,14.19,13.99-6.35,14-14.19,14ZM180.12,54.36c-6.4-10.91-46.42-4.33-93.65,22.57-21.83,12.42-40.78,26.71-53.37,40.21-11.52,12.35-16.48,23.01-13.26,28.5,3.22,5.49,15.04,6.59,31.66,2.92,18.14-4.01,40.17-13.06,61.99-25.49,47.23-26.9,73.02-57.8,66.64-68.71ZM116.35,127.96c-22.31,12.7-44.9,21.98-63.6,26.11-7,1.54-13.16,2.32-18.41,2.32-9.77,0-16.38-2.66-19.45-7.92-4.74-8.09.11-20.24,14-35.15,12.97-13.91,32.41-28.57,54.72-41.28,41.26-23.49,90.82-38.67,101.46-20.5,10.63,18.16-27.48,52.93-68.73,76.43ZM113.49,76.93c-21.82-12.43-43.84-21.48-61.99-25.49-6.49-1.43-12.26-2.14-17.06-2.14-7.48,0-12.63,1.71-14.6,5.05-3.21,5.5,1.75,16.15,13.26,28.5,12.6,13.5,31.55,27.78,53.37,40.21,47.22,26.9,87.25,33.48,93.65,22.56,6.39-10.91-19.41-41.81-66.64-68.71ZM185.08,148.46c-3.27,5.59-10.25,8.03-19.53,8.03-20.86,0-53.39-12.27-81.94-28.52-22.31-12.71-41.75-27.37-54.72-41.28-13.9-14.9-18.74-27.06-14-35.15,4.72-8.09,17.81-10.04,37.86-5.61,18.7,4.13,41.29,13.4,63.6,26.11,41.25,23.49,79.36,58.26,68.73,76.43ZM99.98,8.72c-12.78,0-27.01,37.48-27.01,91.28s14.23,91.28,27.01,91.28,27-37.49,27-91.28S112.76,8.72,99.98,8.72ZM99.98,196.93c-21.26,0-32.73-49.94-32.73-96.93S78.72,3.07,99.98,3.07s32.73,49.94,32.73,96.93-11.47,96.93-32.73,96.93Z"
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

Abstract153.displayName = "Abstract153";
export { Abstract153 };
