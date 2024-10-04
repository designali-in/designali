import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract61: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-61";

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
            d="M108.77,136.9c-2.68,1.34-5.65,2.77-8.87,4.24-4.01,1.82-8.4,3.72-13.11,5.62-.46.19-.81.56-.96,1.03-1.73,5.66-3.64,10.9-5.54,15.58-1.12,2.77-2.25,5.35-3.33,7.7-.28.61-.9.95-1.52.95-.4,0-.8-.14-1.13-.44-4.66-4.25-10.56-10.67-16.63-17.82-.32-.38-.79-.59-1.28-.59h-.05c-2.78.09-5.51.13-8.15.13-6.61,0-12.63-.27-17.37-.84-1.11-.13-1.77-1.26-1.32-2.25,2.7-5.93,7.17-13.69,12.44-21.69.27-.42.34-.94.16-1.41-3.2-8.73-5.84-16.96-7.21-23.02-.23-1.02.57-1.96,1.61-1.96.07,0,.13,0,.2.02,7.05.8,15.72,2.2,25.08,4.5.14.03.27.05.41.05.35,0,.7-.11.99-.32,7.38-5.34,14.22-9.85,19.96-13.33.27-.17.57-.25.87-.25.79,0,1.54.57,1.64,1.43.89,7.34,2.15,15.04,3.03,23.99.04.45.29.87.67,1.15,7.45,5.32,13.59,10.31,19.62,14.82.96.72.83,2.16-.25,2.71ZM188.32,187.59c-.17.15-.34.3-.52.44.01-.02.02-.03.03-.04-17.85,13.82-62.69,5.91-104.7-22.66.1-.25.2-.5.31-.75,2.01-4.95,3.82-10.03,5.4-15.09,4.31-1.75,8.51-3.56,12.5-5.38.51-.23,1.02-.47,1.52-.7,79.94,60.56,114.16,15,28.44-75.94C52.93-7.08-14.09-10.77,13.68,69.39-25.29-16.57,52.61-2.73,101.51,34.37c59.12,38.72,117.78,131.08,86.81,153.22Z"
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

Abstract61.displayName = "Abstract61";
export { Abstract61 };
