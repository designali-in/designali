import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract112: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-112";

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
            d="M188.59,120.89h-25.18v-17.64h-17.72v-6.5h17.72v-18.56h25.18v42.7ZM155.02,120.89h-9.33v-9.28h9.33v9.28ZM155.02,154.3h-25.18v-16.71h-17.72v-3.71h22.38v-22.28h2.8v17.64h17.72v25.06ZM121.45,154.3h-9.32v-8.36h9.32v8.36ZM121.45,188.65h-42.9v-25.99h18.65v-16.71h6.53v16.71h17.72v25.99ZM88.81,145.95v8.36h-10.26v-8.36h10.26ZM45.91,154.3v-25.06h16.78v-17.64h3.73v22.28h22.38v3.71h-18.65v16.71h-24.24ZM54.3,111.6v9.28h-8.39v-9.28h8.39ZM11.41,120.89v-42.7h26.11v18.56h16.78v6.5h-16.78v17.64H11.41ZM45.91,78.19h8.39v10.21h-8.39v-10.21ZM45.91,45.7h24.24v16.71h18.65v3.72h-22.38v22.27h-3.73v-18.56h-16.78v-24.13ZM78.55,45.7h10.26v8.35h-10.26v-8.35ZM78.55,11.35h42.9v25.99h-17.72v16.71h-6.53v-16.71h-18.65V11.35ZM112.12,54.05v-8.35h9.32v8.35h-9.32ZM134.51,96.75h2.8v6.5h-2.8v-6.5ZM126.11,88.39h-13.99v-13.92h13.99v13.92ZM97.2,66.12v-3.72h6.53v3.72h-6.53ZM74.82,88.39v-13.92h13.99v13.92h-13.99ZM66.43,103.25h-3.73v-6.5h3.73v6.5ZM74.82,111.6h13.99v13.92h-13.99v-13.92ZM103.73,133.88v3.71h-6.53v-3.71h6.53ZM126.11,111.6v13.92h-13.99v-13.92h13.99ZM103.73,103.25v22.28h-6.53v-22.28h-22.38v-6.5h22.38v-22.28h6.53v22.28h22.38v6.5h-22.38ZM155.02,78.19v10.21h-9.33v-10.21h9.33ZM155.02,45.7v24.13h-17.72v18.56h-2.8v-22.27h-22.38v-3.72h17.72v-16.71h25.18ZM196.98,69.83h-33.57v-32.49h-33.57V3h-59.69v34.35h-32.64v32.49H3.02v59.41h34.5v33.42h32.64v34.35h59.69v-34.35h33.57v-33.42h33.57v-59.41Z"
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

Abstract112.displayName = "Abstract112";
export { Abstract112 };
