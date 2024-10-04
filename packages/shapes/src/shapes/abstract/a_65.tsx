import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract65: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-65";

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
            d="M189.96,101.81s.04-.07.06-.11c.09-.14.17-.29.24-.45.03-.06.04-.13.06-.19.05-.14.1-.27.13-.41.04-.21.06-.43.06-.64s-.02-.43-.06-.64c-.03-.14-.08-.28-.12-.41-.02-.06-.03-.13-.06-.2-.07-.16-.15-.3-.24-.45-.02-.03-.04-.07-.06-.11-.12-.18-.26-.35-.41-.5L102.3,10.44c-1.27-1.27-3.33-1.27-4.6,0L10.45,97.69c-.15.15-.29.32-.41.5-.02.03-.04.07-.06.11-.09.14-.17.29-.24.45-.03.06-.04.13-.06.2-.05.13-.1.27-.12.41-.04.21-.06.43-.06.64s.02.43.06.64c.03.14.08.28.13.41.02.06.03.13.06.19.07.16.15.31.24.45.02.03.04.07.06.11.12.18.26.35.41.5l87.25,87.25c.15.15.32.29.5.41.03.02.06.03.08.05.15.1.31.18.47.25.05.02.11.03.16.05.14.05.29.1.44.13.21.04.42.06.64.06s.43-.02.64-.06c.15-.03.3-.08.44-.13.05-.02.11-.03.16-.05.17-.07.32-.16.47-.25.03-.02.06-.03.08-.05.18-.12.35-.26.5-.41l87.25-87.25c.15-.15.29-.32.41-.5ZM100,122.8l-22.8-22.8,22.8-22.8,22.8,22.8-22.8,22.8ZM96.75,71.25l-25.5,25.49H20.59L96.75,20.59v50.67ZM71.25,103.25l25.5,25.5v50.67L20.59,103.25h50.67ZM103.25,128.74l25.49-25.5h50.67l-76.16,76.16v-50.67ZM128.74,96.75l-25.49-25.49V20.59l76.16,76.16h-50.67Z"
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

Abstract65.displayName = "Abstract65";
export { Abstract65 };
