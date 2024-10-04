import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract4: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-4";

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
            d="M110.05,92.67l-6.21-4.53h-7.68l-6.2,4.53-2.37,7.33,2.37,7.32,6.2,4.53h7.68l6.21-4.53,2.37-7.32-2.37-7.33ZM115.07,110.99l-9.31,6.79h-11.5l-9.31-6.79-3.55-10.99,3.55-10.99,9.31-6.79h11.5l9.31,6.79,3.56,10.99-3.56,10.99ZM122.6,83.53l-13.96-10.19h-17.26l-13.96,10.19-5.33,16.47,5.33,16.48,13.96,10.18h17.26l13.96-10.18,5.34-16.48-5.34-16.47ZM127.62,120.14l-17.07,12.45h-21.1l-17.07-12.45-6.52-20.14,6.52-20.14,17.07-12.44h21.1l17.07,12.44,6.52,20.14-6.52,20.14ZM134.31,74.98l-21.2-15.46h-26.22l-21.2,15.46-8.11,25.02,8.11,25.02,21.2,15.46h26.22l21.2-15.46,8.1-25.02-8.1-25.02ZM139.33,128.69l-24.31,17.73h-30.05l-24.31-17.73-9.29-28.69,9.29-28.69,24.31-17.73h30.05l24.31,17.73,9.29,28.69-9.29,28.69ZM146.84,65.85l-28.94-21.11h-35.78l-28.95,21.11-11.06,34.15,11.06,34.15,28.95,21.11h35.78l28.94-21.11,11.06-34.15-11.06-34.15ZM151.86,137.82l-32.05,23.37h-39.62l-32.05-23.37-12.24-37.82,12.24-37.82,32.05-23.37h39.62l32.05,23.37,12.24,37.82-12.24,37.82ZM173.9,46.11l-45.68-33.3h-56.46L26.1,46.11l-17.45,53.89,17.45,53.89,45.67,33.3h56.46l45.68-33.3,17.44-53.89-17.44-53.89ZM178.92,157.55l-48.78,35.57h-60.3l-48.78-35.57L2.45,100l18.63-57.55L69.85,6.88h60.3l48.78,35.57,18.63,57.55-18.63,57.55ZM159.42,56.67l-36.72-26.78h-45.4l-36.72,26.78-14.03,43.33,14.03,43.33,36.72,26.78h45.4l36.72-26.78,14.03-43.33-14.03-43.33ZM164.44,146.99l-39.83,29.04h-49.23l-39.83-29.04-15.22-46.99,15.22-46.99,39.83-29.04h49.23l39.83,29.04,15.21,46.99-15.21,46.99Z"
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

Abstract4.displayName = "Abstract4";
export { Abstract4 };
