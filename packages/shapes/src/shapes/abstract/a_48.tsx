import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract48: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-48";

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
            d="M102.59,19.92c-.85.09-1.71.18-2.59.29.72-.19,1.62-.26,2.59-.29ZM137.26,70.83c-10.72-8.47,4.11-26.29-3.36-38.71-3.6-5.99-22.21-12.44-31.31-12.2,61.98-6.58,41.72,29.38,60.69,34.2,17.82,4.52-4.29-57.54-79.7-49.83,36.39-5.77,98.2,6.03,112.14,79.29-14.95-31.56-47-3.69-58.45-12.75ZM19.92,97.41c.09.85.18,1.71.29,2.59-.19-.72-.26-1.62-.29-2.59ZM70.82,62.74c-8.47,10.72-26.29-4.11-38.71,3.36-5.99,3.6-12.44,22.21-12.2,31.31-6.58-61.97,29.38-41.72,34.2-60.69C58.64,18.9-3.42,41.01,4.29,116.43-1.48,80.04,10.32,18.23,83.57,4.29c-31.56,14.95-3.69,47-12.75,58.46ZM97.41,180.08c.85-.09,1.71-.19,2.59-.29-.72.19-1.62.26-2.59.29ZM116.43,195.71c-36.39,5.77-98.2-6.03-112.14-79.29,14.95,31.56,47,3.69,58.46,12.75,10.72,8.47-4.11,26.29,3.36,38.71,3.61,5.99,22.21,12.44,31.31,12.2-61.97,6.58-41.72-29.38-60.68-34.19-17.82-4.53,4.29,57.53,79.7,49.83ZM180.08,102.59c-.09-.85-.18-1.71-.29-2.59.18.72.26,1.62.29,2.59ZM116.43,195.71c31.56-14.95,3.69-47,12.74-58.45,8.47-10.72,26.29,4.11,38.71-3.36,5.99-3.6,12.44-22.21,12.21-31.31,6.58,61.97-29.39,41.72-34.2,60.69-4.53,17.82,57.53-4.29,49.83-79.7,5.76,36.39-6.03,98.2-79.29,112.14Z"
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

Abstract48.displayName = "Abstract48";
export { Abstract48 };
