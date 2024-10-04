import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract27: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-27";

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
            d="M96.07,100.01h-.03l-22.56,15.86s-16.54-15.41-68.14-15.86h-2.27c.39,0,.76-.01,1.14-.01-.38,0-.74-.01-1.14-.01h2.27c51.59-.45,68.14-15.86,68.14-15.86l22.56,15.86h.03-.02s.02.02.02.02ZM196.93,100.01h-2.27c-51.59.45-68.14,15.86-68.14,15.86l-22.56-15.86h-.03.02s-.02-.02-.02-.02h.03l22.56-15.86s16.55,15.41,68.14,15.86h2.27c-.39,0-.76.01-1.14.01.38,0,.75.01,1.14.01ZM100.06,194.76v2.27c0-.39,0-.76-.01-1.14,0,.38,0,.75,0,1.14v-2.27c-.45-51.64-15.85-68.21-15.85-68.21l15.85-22.58v-.03.02s.02-.02.02-.02v.03l15.85,22.58s-15.4,16.57-15.85,68.21ZM100.06,96.03v.03-.02s-.02.02-.02.02v-.03l-15.85-22.58s15.4-16.57,15.85-68.21v-2.27c0,.39,0,.76,0,1.14,0-.38.01-.75.01-1.14v2.27c.45,51.64,15.85,68.21,15.85,68.21l-15.85,22.58Z"
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

Abstract27.displayName = "Abstract27";
export { Abstract27 };
