import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower7: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-7";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="186"
          x="0"
          y="7"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.32,100c-5.28-9.12-8.31-19.7-8.31-31,0-9.09,1.97-17.72,5.49-25.5C21.99,53.22,7.01,74.86,7.01,100s14.98,46.78,36.49,56.5c-3.52-7.78-5.49-16.41-5.49-25.5,0-11.3,3.04-21.88,8.31-31Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M156.5,43.5c3.52,7.78,5.49,16.41,5.49,25.5,0,11.3-3.04,21.88-8.31,31,5.28,9.12,8.31,19.7,8.31,31,0,9.09-1.97,17.72-5.49,25.5,21.51-9.73,36.49-31.36,36.49-56.5s-14.98-46.78-36.49-56.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,46.32c9.12-5.28,19.7-8.31,31-8.31,9.09,0,17.72,1.97,25.5,5.49-9.73-21.51-31.36-36.49-56.5-36.49s-46.78,14.98-56.5,36.49c7.78-3.52,16.41-5.49,25.5-5.49,11.3,0,21.88,3.04,31,8.31Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125.5,74.5c-5.36-11.85-14.32-21.7-25.5-28.18-11.18,6.47-20.15,16.33-25.5,28.18,7.78-3.52,16.41-5.49,25.5-5.49s17.72,1.97,25.5,5.49Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,153.68c-9.12,5.28-19.7,8.31-31,8.31-9.09,0-17.72-1.97-25.5-5.49,9.73,21.51,31.36,36.49,56.5,36.49s46.78-14.98,56.5-36.49c-7.78,3.52-16.41,5.49-25.5,5.49-11.3,0-21.88-3.04-31-8.31Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74.5,125.5c5.36,11.85,14.32,21.7,25.5,28.18,11.18-6.47,20.15-16.33,25.5-28.18-7.78,3.52-16.41,5.49-25.5,5.49s-17.72-1.97-25.5-5.49Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74.5,74.5c-11.85,5.36-21.7,14.32-28.18,25.5,6.47,11.18,16.33,20.15,28.18,25.5-3.52-7.78-5.49-16.41-5.49-25.5s1.97-17.72,5.49-25.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125.5,74.5c3.52,7.78,5.49,16.41,5.49,25.5s-1.97,17.72-5.49,25.5c11.85-5.36,21.7-14.32,28.18-25.5-6.47-11.18-16.33-20.15-28.18-25.5Z"
          />
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4711)"
            d="M200 0H0v200h200V0z"
          ></path>
          <g filter="url(#filter0_f_748_4711)">
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
          id="filter0_f_748_4711"
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
            result="effect1_foregroundBlur_748_4711"
            stdDeviation="27.5"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4711"
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

Flower7.displayName = "Flower7";
export { Flower7 };
