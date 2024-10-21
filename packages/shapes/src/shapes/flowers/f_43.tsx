import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower43: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-43";

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
            d="M82.69,70.2s.02.04.02.04l5.92,10.26c3.34-1.95,7.22-3.09,11.37-3.09s7.9,1.1,11.21,2.99l5.94-10.29c.46-.8,16.77-29.19,16.74-29.2,0-18.72-15.17-33.89-33.89-33.89s-33.82,15.11-33.89,33.77c-.1.06,16.44,29.18,16.44,29.18l.14.24Z"
          />

          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M168.23,100.26c0-.12-33.49-.35-33.49-.35h-.27s-.05,0-.05,0h-11.83s0,.06,0,.09c0,8.33-4.52,15.59-11.23,19.51l5.94,10.29c.45.77,16.89,29.12,16.92,29.1,16.21,9.36,36.94,3.8,46.3-12.41,9.34-16.18,3.83-36.85-12.3-46.23Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M180.53,53.5c-9.34-16.18-30-21.74-46.19-12.46-.1-.06-17.05,28.82-17.05,28.82l-.14.24s-.02.04-.02.04l-5.92,10.25c6.77,3.88,11.35,11.15,11.38,19.51h11.87c1,0,33.66-.07,33.66-.11,16.21-9.36,21.76-30.09,12.4-46.3Z"
          />

          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.4,100.09s0-.06,0-.09c0-8.33,4.52-15.59,11.23-19.51l-5.94-10.29c-.45-.78-16.89-29.12-16.92-29.1-16.21-9.36-36.94-3.8-46.3,12.41-9.34,16.18-3.83,36.85,12.3,46.23,0,.12,33.49.35,33.49.35h.27s.05,0,.05,0h11.83Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M77.4,100.09h-11.87c-1,0-33.66.07-33.66.11-16.21,9.36-21.76,30.09-12.4,46.3,9.34,16.18,30,21.74,46.19,12.46.1.06,17.05-28.82,17.05-28.82l.14-.24s.02-.04.02-.04l5.92-10.25c-6.77-3.88-11.35-11.15-11.38-19.51Z"
          />

          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M117.45,130.04l-.14-.24s-.02-.04-.02-.04l-5.92-10.26c-3.34,1.95-7.22,3.09-11.37,3.09s-7.9-1.1-11.21-2.99l-5.94,10.29c-.46.8-16.77,29.19-16.74,29.2,0,18.72,15.17,33.89,33.89,33.89s33.82-15.11,33.89-33.77c.1-.06-16.44-29.18-16.44-29.18Z"
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

Flower43.displayName = "Flower43";
export { Flower43 };
