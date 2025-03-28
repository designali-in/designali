import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract147: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-147";

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
            d="M96.48,134.42c-.43-.06-.73-.13-1.02-.13-15.83,0-31.67-.02-47.5.04-.63,0-1.48.57-1.83,1.12-1.37,2.12-2.62,4.33-3.83,6.55-3.31,6.03-2.57,13.51,1.86,18.28,3.62,3.89,8.33,5.58,13.47,5.65,12.62.17,25.23.09,37.85.1.3,0,.6-.08,1-.13v-31.48ZM57.93,100.76c2.37,1.35,4.54,2.57,6.7,3.8-.03-.78-.27-1.32-.57-1.82-4.01-6.94-8.07-13.86-12.02-20.83-.65-1.15-1.38-1.49-2.63-1.48-8.1.05-16.2.02-24.31.03-.51,0-1.02.06-2.08.14,2.66,1.56,4.85,2.85,7.12,4.18-.42.76-.72,1.36-1.06,1.94-2.99,5.18-6.03,10.33-8.98,15.53-3.18,5.6-3.22,11.22.07,16.85,3.91,6.71,7.72,13.47,11.58,20.22.73,1.26,1.47,2.51,2.1,3.61,7.67-14.39,16.17-28.09,24.08-42.17ZM103.48,173.04h-2.37c-13.97,0-27.95.03-41.92-.01-10.49-.03-18.48-4.28-23.7-13.66-6.98-12.55-14.29-24.91-21.35-37.42-4.4-7.81-4.42-15.74.05-23.59,2.38-4.17,4.8-8.32,7.3-12.63-6.08-3.5-12.11-6.96-18.58-10.68.97-.07,1.47-.14,1.96-.14,15.96,0,31.91.01,47.86-.03,1.27,0,1.95.38,2.6,1.5,7.95,13.85,15.97,27.66,23.97,41.48.22.37.42.75.91,1.67-6.49-3.72-12.53-7.18-18.71-10.72-3.54,6.11-7,12.11-10.68,18.45h52.66v45.78ZM157.82,34.65c-2.17,1.24-4.35,2.48-6.71,3.82-3.48-5.99-6.81-11.82-10.23-17.6-2.97-5.01-7.38-8.06-13.25-8.2-9.33-.23-18.67-.1-28-.11-.31,0-.63.14-.52.11,8.07,13.9,16.14,27.77,24.27,41.76-2.38,1.39-4.53,2.65-6.96,4.07.56.13.78.23,1.01.24,8.59,0,17.18.03,25.78-.05.64,0,1.51-.71,1.88-1.33,3.36-5.67,6.64-11.4,9.94-17.11,1.03-1.78,2.05-3.57,3.07-5.37-.09-.08-.18-.17-.26-.25ZM71.75,16.32c-2.26,1.91-4.24,4.35-5.76,6.9-6.1,10.21-11.97,20.55-17.91,30.85-.2.35-.35.73-.56,1.19,9.19,5.29,18.26,10.51,27.26,15.7.26-.22.39-.28.45-.38,8.06-13.92,16.12-27.83,24.14-41.78.24-.41.18-1.2-.05-1.64-1.29-2.38-2.59-4.77-4.04-7.06-5.33-8.45-15.91-10.23-23.52-3.78ZM172.39,21.44c-8.01,13.81-16.03,27.62-24.02,41.44-.55.96-1.12,1.42-2.29,1.41-15.95-.04-31.91-.02-47.87-.03-.42,0-.84-.06-1.43-.45,5.87-3.39,11.74-6.78,17.84-10.29-3.55-6.15-7.03-12.18-10.65-18.46-8.85,15.27-17.58,30.34-26.44,45.62-13.26-7.63-26.45-15.22-39.79-22.89,1.79-3.12,3.52-6.14,5.27-9.16,5.55-9.6,11.11-19.21,16.68-28.81,4.08-7.04,9.68-12.28,17.97-13.59,4.11-.65,8.37-.44,12.57-.44,12.12,0,24.24.1,36.36.16,7.39.04,13.7,2.64,18.37,8.42,2.04,2.52,3.52,5.49,5.2,8.29,1.52,2.52,2.97,5.09,4.51,7.75,6.13-3.51,12.1-6.93,18.45-10.57-.35.76-.5,1.19-.72,1.57ZM186.68,100.09c-5.86-10.13-11.73-20.26-17.6-30.38-.26-.46-.6-.87-.94-1.36-9.18,5.3-18.24,10.53-27.24,15.72.06.33.05.47.11.57,8.02,13.87,16.03,27.74,24.11,41.57.31.54,1.22.99,1.88,1.02,2.4.12,4.82.1,7.23.04,8.43-.19,14.82-5.6,15.9-13.64.66-4.91-1.02-9.35-3.44-13.53ZM130.8,134.01v-8.06c-4.72,8.16-9.17,15.84-13.54,23.55-.27.47-.1,1.42.2,1.95,4.13,7.22,8.31,14.41,12.5,21.61.21.37.51.7,1.09,1.47v-8.18h2.19c6,0,11.99.07,17.99-.02,6.19-.1,11.05-2.7,14.26-8.1,1.2-2.01,2.38-4.03,3.56-6.06,3.54-6.06,7.07-12.11,10.61-18.16h-48.84ZM192.85,124.77c-2.17,3.44-4.14,7.01-6.2,10.52-5.18,8.83-10.32,17.68-15.56,26.48-4.5,7.55-11.24,11.4-20.03,11.58-4.33.09-8.66.02-12.99.02h-1.99v20.76c-.12.04-.25.07-.37.1-1.75-3-3.5-6.01-5.25-9.02-6.4-11.04-12.78-22.09-19.23-33.11-.73-1.26-.82-2.18-.04-3.5,7.99-13.69,15.89-27.42,23.82-41.14.23-.4.5-.78,1.01-1.58v21.26h21.36c-8.82-15.25-17.51-30.3-26.32-45.55,13.26-7.65,26.45-15.24,39.79-22.94,2.23,3.84,4.43,7.61,6.62,11.39,5.13,8.85,10.3,17.69,15.37,26.58,5.33,9.36,5.93,18.74-.02,28.15Z"
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

Abstract147.displayName = "Abstract147";
export { Abstract147 };
