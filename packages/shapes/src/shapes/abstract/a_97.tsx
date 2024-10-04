import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract97: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-97";

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
            d="M156.82,53.1l-9.92-9.92-46.9,46.9-46.9-46.9-9.92,9.92,46.9,46.9-46.9,46.9,9.92,9.92,46.9-46.9,46.9,46.9,9.92-9.92-46.9-46.9,46.9-46.9ZM166.17,146.9l-19.27,19.27-46.9-46.9-46.9,46.9-19.27-19.27,46.9-46.9-46.9-46.9,19.27-19.27,46.9,46.9,46.9-46.9,19.27,19.27-46.9,46.9,46.9,46.9ZM187.61,50.05l-37.65-37.65-49.95,49.95L50.05,12.4,12.4,50.05l49.95,49.95-49.95,49.95,37.65,37.65,49.95-49.95,49.95,49.95,37.65-37.65-49.95-49.95,49.95-49.95ZM196.96,149.95l-47,47.01-49.95-49.95-49.95,49.95L3.04,149.95l49.95-49.95L3.04,50.05,50.05,3.04l49.95,49.95L149.95,3.04l47,47-49.95,49.95,49.95,49.95Z"
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

Abstract97.displayName = "Abstract97";
export { Abstract97 };
