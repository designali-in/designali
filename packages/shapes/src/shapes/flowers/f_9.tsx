import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower9: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-9";

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
            d="M132.88,20.63c-8.41-8.41-20.04-13.62-32.88-13.62s-24.46,5.2-32.88,13.62c11.9,0,23.8,4.54,32.88,13.62,9.08-9.08,20.98-13.62,32.88-13.62Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.12,179.37c8.41,8.41,20.04,13.62,32.88,13.62s24.46-5.2,32.88-13.62c-11.9,0-23.8-4.54-32.88-13.62-9.08,9.08-20.98,13.62-32.88,13.62Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M132.88,179.37c11.9,0,23.8-4.54,32.88-13.62,9.08-9.08,13.62-20.98,13.62-32.88-8.41,8.41-20.04,13.62-32.88,13.62,0,12.84-5.2,24.46-13.62,32.88Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.12,20.63c-11.9,0-23.8,4.54-32.88,13.62-9.08,9.08-13.62,20.98-13.62,32.88,8.41-8.41,20.04-13.62,32.88-13.62,0-12.84,5.2-24.46,13.62-32.88Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.63,132.88c0,11.9,4.54,23.8,13.62,32.88,9.08,9.08,20.98,13.62,32.88,13.62-8.41-8.41-13.62-20.04-13.62-32.88-12.84,0-24.46-5.2-32.88-13.62Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,165.75c18.16-18.16,0-65.75,0-65.75,0,0-18.16,47.6,0,65.75Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M179.37,67.12c0-11.9-4.54-23.8-13.62-32.88s-20.98-13.62-32.88-13.62c8.41,8.41,13.62,20.04,13.62,32.88,12.84,0,24.46,5.2,32.88,13.62Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,34.25c-18.16,18.16,0,65.75,0,65.75,0,0,18.16-47.6,0-65.75Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M179.37,67.12c0,11.9-4.54,23.8-13.62,32.88,9.08,9.08,13.62,20.98,13.62,32.88,8.41-8.41,13.62-20.04,13.62-32.88s-5.2-24.46-13.62-32.88Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.5,146.5c0-25.68-46.5-46.5-46.5-46.5,0,0,20.82,46.5,46.5,46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.5,53.5c-25.68,0-46.5,46.5-46.5,46.5,0,0,46.5-20.82,46.5-46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100s47.6,18.16,65.75,0c-18.16-18.16-65.75,0-65.75,0Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.63,67.12c-8.41,8.41-13.62,20.04-13.62,32.88s5.2,24.46,13.62,32.88c0-11.9,4.54-23.8,13.62-32.88-9.08-9.08-13.62-20.98-13.62-32.88Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5,53.5c0,25.68,46.5,46.5,46.5,46.5,0,0-20.82-46.5-46.5-46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.5,146.5c25.68,0,46.5-46.5,46.5-46.5,0,0-46.5,20.82-46.5,46.5Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.25,100c18.16,18.16,65.75,0,65.75,0,0,0-47.6-18.16-65.75,0Z"
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

Flower9.displayName = "Flower9";
export { Flower9 };
