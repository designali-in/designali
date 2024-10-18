import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract216: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-216";

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
            d="M169.76,77.26l15.35-1.93-25.91-3.25c-3.58-.45-6.4-3.27-6.85-6.85l-3.25-25.91-3.25,25.91c-.22,1.75-1.01,3.32-2.18,4.52-13.14-2.59-27.96-4.06-43.65-4.06-16.79,0-32.58,1.67-46.38,4.61l-2.23-17.79-2.26,17.99c-.04.3-.1.58-.18.86-6.52,1.58-12.53,3.45-17.91,5.57l-4.66.58,2.46.31c-16.38,6.88-26.42,16.12-26.42,26.3,0,17.57,29.92,32.38,70.78,36.97l2.46,19.58,2.4-19.09c7.05.64,14.39.98,21.93.98,53.89,0,97.57-17.21,97.57-38.44,0-10.46-10.61-19.94-27.81-26.87ZM100,141.16c-7.51,0-14.79-.45-21.72-1.28l.13-1.04c.38-3.02,2.76-5.4,5.78-5.78l21.84-2.74-21.84-2.74c-3.02-.38-5.4-2.76-5.78-5.78l-2.74-21.84-2.74,21.84c-.38,3.02-2.76,5.4-5.78,5.78l-21.84,2.74,21.84,2.74c3.02.38,5.4,2.76,5.78,5.78l.04.32c-32.69-4.99-56.18-18.79-56.18-35.03,0-9.66,8.32-18.46,21.95-25.06l5.63.71c2.49.31,4.45,2.27,4.76,4.76l2.26,17.99,2.26-17.99c.31-2.49,2.27-4.45,4.76-4.76l17.99-2.26-17.99-2.26c-1.53-.19-2.86-1.01-3.73-2.19,13.04-3.78,28.61-5.97,45.32-5.97,14.67,0,28.45,1.69,40.41,4.66-.46.15-.94.26-1.44.32l-25.91,3.25,25.91,3.25c3.58.45,6.4,3.27,6.85,6.85l3.25,25.91,3.25-25.91c.45-3.58,3.27-6.4,6.85-6.85l.82-.1c14.36,6.65,23.2,15.69,23.2,25.65,0,20.45-37.25,37.03-83.21,37.03Z"
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

Abstract216.displayName = "Abstract216";
export { Abstract216 };
