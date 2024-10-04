import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract136: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-136";

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
            d="M135.78,86.32h.02s-35.77,13.68-35.77,13.68l-.02-.03L142.35,5.24l-1.63,20.16c-1.69,20.87,15.08,38.59,36.01,38.06l20.23-.52-61.18,23.38ZM100,100h-.02S5.24,57.65,5.24,57.65l20.03,1.62c20.78,1.68,38.46-14.94,38.07-35.78l-.39-20.44,23.38,61.18.02-.03,13.67,35.78v.03ZM194.77,142.35l-19.94-1.75c-20.95-1.84-38.83,14.97-38.29,35.99l.52,20.36-37.05-96.92h0s.02,0,.02,0v-.02s94.73,42.34,94.73,42.34ZM57.65,194.76l1.59-20.29c1.65-20.87-15.17-38.56-36.1-37.97l-20.1.56,96.94-37.05.03.02h0s-42.36,94.74-42.36,94.74Z"
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

Abstract136.displayName = "Abstract136";
export { Abstract136 };
