import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower44: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-44";

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
            d="M100,100l46.5-46.5c0-25.68-20.82-46.5-46.5-46.5v27.24c18.16,18.16,18.16,47.6,0,65.75Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100l-46.5,46.5c0,25.68,20.82,46.5,46.5,46.5v-27.24c-18.16-18.16-18.16-47.6,0-65.75Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.99,100h-27.24c-18.16,18.16-47.6,18.16-65.75,0l46.5,46.5h0c25.68,0,46.5-20.82,46.5-46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100l-46.5-46.5c-25.68,0-46.5,20.82-46.5,46.5h27.24c18.16-18.16,47.6-18.16,65.75,0Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100h65.75c18.16-18.16,18.16-47.6,0-65.75l-19.26,19.26h0c0,25.68-20.82,46.5-46.5,46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100H34.25c-18.16,18.16-18.16,47.6,0,65.75l19.26-19.26c0-25.68,20.82-46.5,46.5-46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100v65.75c18.16,18.16,47.6,18.16,65.75,0l-19.26-19.26c-25.68,0-46.5-20.82-46.5-46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100V34.25c-18.16-18.16-47.6-18.16-65.75,0l19.26,19.26c25.68,0,46.5,20.82,46.5,46.5Z"
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

Flower44.displayName = "Flower44";
export { Flower44 };
