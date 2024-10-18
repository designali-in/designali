import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract238: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-238";

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
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="100 3.36 100 44.64 100 85.92 124.26 44.64 100 3.36"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="3.36 100 44.64 100 85.92 100 44.64 75.74 3.36 100"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="100 196.64 100 155.36 100 114.08 75.74 155.36 100 196.64"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M111.51,108.4s-.09-.07-.13-.11c1.7-2.33,2.7-5.19,2.7-8.29s-.95-5.8-2.56-8.09l45.33-11.77c.77-.2,1.37-.8,1.57-1.57l12.03-46.35c.25-.96-.18-1.97-1.04-2.46-.86-.49-1.94-.35-2.65.35l-58.38,58.38s-.07.09-.11.13c-2.33-1.7-5.19-2.7-8.29-2.7s-5.8.95-8.09,2.56l-11.77-45.33c-.2-.77-.8-1.37-1.57-1.57l-46.35-12.03c-.96-.25-1.97.18-2.46,1.04s-.35,1.94.35,2.65l58.38,58.38s.09.07.13.11c-1.7,2.33-2.7,5.19-2.7,8.29s.95,5.8,2.56,8.09l-45.33,11.77c-.77.2-1.37.8-1.57,1.57l-12.03,46.35c-.25.96.18,1.97,1.04,2.46.34.2.72.29,1.09.29.57,0,1.13-.22,1.55-.64l58.38-58.38s.07-.09.11-.13c2.33,1.7,5.19,2.7,8.29,2.7s5.8-.95,8.09-2.56l11.77,45.33c.2.77.8,1.37,1.57,1.57l46.35,12.03c.18.05.37.07.55.07.77,0,1.51-.41,1.91-1.11.49-.86.35-1.94-.35-2.65l-58.38-58.38ZM38.93,35.82l37.28,9.68,9.68,37.28-46.96-46.96ZM35.82,161.07l9.68-37.28,37.28-9.68-46.96,46.96ZM164.18,38.93l-9.68,37.28-37.28,9.68s46.96-46.96,46.96-46.96ZM123.79,154.5l-9.68-37.28,46.96,46.96-37.28-9.68Z"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="196.64 100 155.36 100 114.08 100 155.36 124.26 196.64 100"
          />
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
              d="M196 91H82v238h114V91z"
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

Abstract238.displayName = "Abstract238";
export { Abstract238 };
