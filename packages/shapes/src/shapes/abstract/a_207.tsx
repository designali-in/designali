import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract207: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-207";

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
            d="M147.39,107.25l48.46-9.43-48.84-7.21,42.32-25.44-48.36,9.93,31.06-38.38-42.05,25.87,16.06-46.69-30.67,38.69-.87-49.37-15.59,46.85L81.21,5.98l1.38,49.35L50.18,18.08l18.17,45.91-43.19-23.93,32.78,36.92-48.77-7.71,43.43,23.48-48.46,9.43,48.84,7.21-42.32,25.44,48.36-9.93-31.06,38.38,42.05-25.87-16.07,46.69,30.67-38.69.87,49.37,15.59-46.85,17.7,46.09-1.38-49.35,32.4,37.26-18.17-45.91,43.19,23.93-32.78-36.92,48.77,7.71-43.43-23.48h0ZM158.64,146.97l-33.85-18.75,14.24,35.98-25.39-29.2,1.08,38.68-13.87-36.12-12.21,36.71-.68-38.69-24.03,30.32,12.59-36.59-32.96,20.27,24.34-30.07-37.9,7.78,33.16-19.94-38.28-5.65,37.98-7.39-34.04-18.4,38.22,6.05-25.69-28.94,33.85,18.75-14.24-35.98,25.39,29.2-1.08-38.68,13.87,36.12,12.21-36.71.68,38.69,24.03-30.32-12.59,36.59,32.96-20.27-24.34,30.07,37.9-7.78-33.16,19.94,38.28,5.65-37.98,7.39,34.04,18.4-38.22-6.05,25.69,28.94h0Z"
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
            <path fill="#FF58E4" d="M207 0H69v113h61V0z"></path>
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

Abstract207.displayName = "Abstract207";
export { Abstract207 };
