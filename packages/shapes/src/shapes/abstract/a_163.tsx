import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract163: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-163";

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
            d="M186.48,97.67c-.25-9.89-2.18-19.55-5.74-28.78-4.03-10.43-9.96-19.88-17.65-28.07-.1-.1-.2-.21-.3-.31l18.97-18.97-3.3-3.3-18.97,18.97c-6.87-6.52-14.68-11.82-23.29-15.8-10.52-4.85-21.77-7.5-33.44-7.87-.14,0-.29,0-.43-.01V1.99h-4.67v11.53c-9.89.25-19.55,2.18-28.78,5.74-10.44,4.03-19.88,9.96-28.07,17.65-.1.1-.21.2-.31.3l-18.97-18.97-3.3,3.3,18.97,18.97c-6.52,6.87-11.82,14.68-15.8,23.29-4.75,10.3-7.38,21.3-7.84,32.71H1.99v4.67h11.51c.13,10.3,2.06,20.35,5.76,29.94,4.03,10.44,9.96,19.88,17.65,28.08.1.1.2.2.3.31l-18.97,18.97,3.3,3.3,18.97-18.97c6.87,6.52,14.68,11.82,23.29,15.8,10.52,4.85,21.77,7.5,33.44,7.87.14,0,.29,0,.43.01v11.53h4.67v-11.53c9.89-.25,19.55-2.18,28.78-5.73,10.44-4.03,19.88-9.96,28.08-17.65.1-.1.21-.2.31-.3l18.97,18.97,3.3-3.3-18.97-18.97c6.52-6.87,11.82-14.68,15.8-23.29,4.85-10.52,7.5-21.77,7.87-33.44,0-.14,0-.29.01-.43h11.53v-4.67h-11.53ZM44.01,40.31c14.74-13.82,33.63-21.58,53.66-22.12v11.47h4.67v-11.46c.09,0,.19,0,.28,0,20.19.64,39.04,8.53,53.58,22.3l-56.2,56.19-56.19-56.19c.07-.06.13-.13.2-.19h0ZM40.31,155.99c-14.09-15.02-21.87-34.36-22.14-54.82h11.49v-4.67h-11.42c.84-19.86,8.69-38.37,22.27-52.7l56.19,56.2-56.19,56.2c-.06-.07-.13-.13-.19-.2h0ZM155.99,159.69c-14.74,13.82-33.63,21.58-53.66,22.12v-11.47h-4.67v11.46c-.09,0-.19,0-.28,0-20.19-.64-39.04-8.53-53.58-22.3l56.2-56.2,56.2,56.2c-.07.06-.13.13-.2.19h0ZM181.8,102.33c0,.09,0,.19,0,.28-.64,20.19-8.53,39.04-22.3,53.58l-56.2-56.2,56.2-56.19c.06.07.13.13.19.2,13.82,14.73,21.57,33.63,22.12,53.66h-11.46v4.67h11.46Z"
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

Abstract163.displayName = "Abstract163";
export { Abstract163 };
