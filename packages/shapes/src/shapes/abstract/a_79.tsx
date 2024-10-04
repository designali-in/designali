import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract79: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-79";

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
            d="M73.36,23.5c-16.04,9.2-26.86,26.44-26.86,46.16,0,.52.02,1.03.04,1.53L20.42,23.5h52.95ZM103.56,122.79c9.86-.65,18.99-3.96,26.68-9.23l-26.68,48.7v-39.47ZM96.44,122.79v39.47l-26.68-48.7c7.69,5.27,16.82,8.58,26.68,9.23ZM96.44,115.67c-23.9-1.82-42.8-21.75-42.8-46.01s18.89-44.19,42.8-46.01v92.02ZM103.56,23.65c23.9,1.82,42.8,21.75,42.8,46.01s-18.89,44.19-42.8,46.01V23.65ZM179.58,23.5l-26.12,47.69c.01-.51.04-1.02.04-1.53,0-19.72-10.83-36.95-26.86-46.16h52.95ZM8.4,16.4l91.6,167.21L191.6,16.4H8.4Z"
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

Abstract79.displayName = "Abstract79";
export { Abstract79 };
