import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract123: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-123";

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
            d="M89.25,122.84l-12.08-12.08H11.45v17.83h59.95v59.96h17.85v-65.71ZM63.76,196.2v-59.95H3.81v-33.13h76.52l16.56,16.56v76.52h-33.13ZM188.55,110.76h-65.7l-12.1,12.08v65.71h17.85v-59.96h59.95v-17.83ZM136.24,136.25v59.95h-33.13v-76.52l16.56-16.56h76.52v33.13h-59.95ZM188.55,71.41h-59.95V11.45h-17.85v65.71l12.1,12.08h65.7v-17.83ZM119.67,96.89l-16.56-16.56V3.8h33.13v59.95h59.95v33.13h-76.52ZM89.25,11.45h-17.85v59.96H11.45v17.83h65.71l12.08-12.08V11.45ZM80.33,96.89H3.81v-33.13h59.95V3.8h33.13v76.52l-16.56,16.56Z"
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

Abstract123.displayName = "Abstract123";
export { Abstract123 };
