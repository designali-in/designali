import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract6: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-6";

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
            d="M181.83,164.42H58.54c-1.53,0-2.78-1.24-2.78-2.77s1.24-2.77,2.78-2.77h123.29c1.53,0,2.78,1.24,2.78,2.77s-1.24,2.77-2.78,2.77ZM155.25,148.98c-.44.26-.93.38-1.4.38-.95,0-1.88-.49-2.4-1.37l-43.3-73.67c-.78-1.32-.33-3.02.99-3.8,1.32-.77,3.02-.33,3.8.99l43.3,73.67c.78,1.32.34,3.02-.98,3.79ZM112.67,41.68L30.81,178.26c-.52.87-1.44,1.35-2.38,1.35-.48,0-.98-.12-1.42-.39-1.32-.79-1.74-2.49-.95-3.8L107.91,38.83c.79-1.31,2.49-1.74,3.8-.95,1.31.79,1.74,2.49.95,3.8ZM134.75,149c-.43.25-.9.36-1.37.36-.97,0-1.91-.5-2.41-1.4l-32.5-57.19c-.76-1.34-.29-3.02,1.04-3.78,1.33-.76,3.02-.29,3.78,1.04l32.5,57.19c.76,1.33.29,3.02-1.04,3.78ZM173.8,149.36h-104.99c-1.53,0-2.77-1.24-2.77-2.77s1.24-2.77,2.77-2.77h104.99c1.53,0,2.77,1.24,2.77,2.77s-1.24,2.77-2.77,2.77ZM122.52,58.01l-70.31,119.81c-.51.88-1.44,1.37-2.4,1.37-.48,0-.96-.12-1.4-.38-1.32-.77-1.76-2.47-.99-3.79L117.73,55.2c.78-1.32,2.48-1.76,3.8-.98,1.32.77,1.76,2.47.99,3.79ZM100,28.55L12.42,174.06h175.17L100,28.55ZM194.91,178.2c-.49.87-1.42,1.41-2.41,1.41H7.51c-1,0-1.92-.53-2.41-1.41-.49-.87-.48-1.93.03-2.79L97.62,21.74c.5-.83,1.41-1.34,2.38-1.34s1.88.51,2.38,1.34l92.49,153.67c.51.86.53,1.92.04,2.79Z"
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

Abstract6.displayName = "Abstract6";
export { Abstract6 };
