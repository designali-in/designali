import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract239: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-239";

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
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="20.83"
            y="22.63"
            width="31.67"
            height="31.67"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="115.83"
            y="54.3"
            width="31.67"
            height="61.12"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="84.17"
            y="2.32"
            width="31.67"
            height="51.98"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="20.83"
            y="115.43"
            width="31.67"
            height="50.58"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="84.17"
            y="115.43"
            width="31.67"
            height="50.58"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="147.5"
            y="115.43"
            width="31.67"
            height="50.58"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="52.5"
            y="54.3"
            width="31.67"
            height="61.12"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="52.5"
            y="166.01"
            width="31.67"
            height="31.67"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="147.5"
            y="22.63"
            width="31.67"
            height="31.67"
          />
          <rect
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            x="115.83"
            y="166.01"
            width="31.67"
            height="31.67"
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

Abstract239.displayName = "Abstract239";
export { Abstract239 };
