import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract39: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-39";

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
            d="M195.94,164.95L110.89,17.62c-.51-.88-1.45-1.43-2.47-1.43h-16.83c-1.02,0-1.96.54-2.47,1.43L4.06,164.95c-.51.88-.51,1.97,0,2.85l8.41,14.57c.51.88,1.45,1.43,2.47,1.43h170.11c1.02,0,1.96-.54,2.47-1.43l8.41-14.57c.51-.88.51-1.97,0-2.85ZM106.77,21.91l81.76,141.62H45.13l5.12-8.87h117.98c1.02,0,1.96-.54,2.47-1.43.51-.88.51-1.97,0-2.85L96.53,21.91h10.24ZM146.46,148.95H53.54l46.46-80.46,46.46,80.46ZM183.41,178.09H19.89L91.59,53.91l5.12,8.87-50.57,87.6s0,0,0,0l-8.41,14.57c-.51.88-.51,1.97,0,2.85.51.88,1.45,1.43,2.47,1.43h148.34l-5.12,8.87Z"
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

Abstract39.displayName = "Abstract39";
export { Abstract39 };
