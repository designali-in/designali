import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract107: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-107";

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
            d="M150.41,103.88h-38.78v-7.76h38.78v7.76ZM189,111.64c-1.61,17.8-14.19,32.45-30.9,37.18.03-.75.06-1.51.06-2.26v-34.92h30.84ZM111.63,189.05v-30.86h34.9c.76,0,1.51-.02,2.26-.06-4.72,16.72-19.37,29.31-37.16,30.92ZM150.23,150.25c-1.22.11-2.45.18-3.7.18h-34.9v-38.79h38.78v34.92c0,1.25-.07,2.48-.18,3.7ZM96.12,150.43v-38.79h7.76v38.79h-7.76ZM88.37,189.05c-17.79-1.61-32.44-14.2-37.16-30.92.75.03,1.51.06,2.26.06h34.9v30.86ZM11,111.64h30.84v34.92c0,.76.02,1.51.06,2.26-16.71-4.72-29.29-19.38-30.9-37.18ZM49.59,146.55v-34.92h38.78v38.79h-34.9c-1.25,0-2.48-.07-3.7-.18-.11-1.22-.18-2.45-.18-3.7ZM49.59,96.12h38.78v7.76h-38.78v-7.76ZM11,88.36c1.61-17.8,14.19-32.46,30.9-37.18-.03.75-.06,1.51-.06,2.27v34.92H11ZM88.37,10.95v30.86h-34.9c-.76,0-1.51.02-2.26.06,4.72-16.72,19.37-29.31,37.16-30.91ZM49.77,49.74c1.22-.11,2.45-.18,3.7-.18h34.9v38.8h-38.78v-34.92c0-1.25.07-2.49.18-3.7ZM103.88,96.12v7.76h-7.76v-7.76h7.76ZM103.88,49.56v38.8h-7.76v-38.8h7.76ZM111.63,10.95c17.79,1.61,32.44,14.2,37.16,30.91-.75-.03-1.51-.06-2.26-.06h-34.9V10.95ZM150.41,53.45v34.92h-38.78v-38.8h34.9c1.25,0,2.48.07,3.7.18.11,1.22.18,2.46.18,3.7ZM189,88.36h-30.84v-34.92c0-.76-.02-1.52-.06-2.27,16.71,4.72,29.29,19.38,30.9,37.18ZM196.93,96.12v-3.88c0-24.2-17.13-44.47-39.89-49.32-4.85-22.77-25.11-39.91-49.29-39.91h-3.88v38.79h-7.76V3.01h-3.88c-24.18,0-44.44,17.14-49.29,39.91C20.19,47.77,3.07,68.04,3.07,92.24v3.88h38.77v7.76H3.07v3.88c0,24.2,17.13,44.46,39.89,49.32,4.85,22.78,25.11,39.91,49.29,39.91h3.88v-38.8h7.76v38.8h3.88c24.18,0,44.44-17.14,49.29-39.91,22.76-4.85,39.89-25.12,39.89-49.32v-3.88h-38.77v-7.76h38.77Z"
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

Abstract107.displayName = "Abstract107";
export { Abstract107 };
