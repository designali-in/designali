import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower15: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-15";

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
            d="M100,72.48c1.16-7.08,3.4-14.7,7.52-21.83,2.95-5.12,6.15-9.79,9.43-13.89-2.63-17.4-9.22-29.75-16.95-29.75s-14.32,12.35-16.95,29.75c3.28,4.11,6.48,8.78,9.43,13.89,4.12,7.13,6.36,14.75,7.52,21.83Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,127.52c-1.16,7.08-3.4,14.7-7.52,21.83-2.95,5.12-6.15,9.79-9.43,13.89,2.63,17.4,9.22,29.75,16.95,29.75s14.32-12.35,16.95-29.75c-3.28-4.11-6.48-8.78-9.43-13.89-4.12-7.13-6.36-14.75-7.52-21.83Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.99,100c0-7.72-12.35-14.32-29.75-16.95-4.11,3.28-8.78,6.48-13.89,9.43-7.13,4.12-14.75,6.36-21.83,7.52,7.08,1.16,14.7,3.4,21.83,7.52,5.12,2.95,9.79,6.15,13.89,9.43,17.4-2.63,29.75-9.22,29.75-16.95Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.48,100c-7.08-1.16-14.7-3.4-21.83-7.52-5.12-2.95-9.79-6.15-13.89-9.43-17.4,2.63-29.75,9.22-29.75,16.95s12.35,14.32,29.75,16.95c4.11-3.28,8.78-6.48,13.89-9.43,7.13-4.12,14.75-6.36,21.83-7.52Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.24,76.17c-2.54-6.71-4.41-14.43-4.41-22.66,0-5.91.43-11.55,1.22-16.75-10.98-13.76-22.86-21.15-29.55-17.29-6.69,3.86-6.23,17.85.2,34.24,4.89,1.92,10,4.36,15.11,7.32,7.13,4.12,12.88,9.6,17.42,15.15Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.76,123.83c2.54,6.71,4.41,14.43,4.41,22.66,0,5.91-.43,11.55-1.22,16.75,10.97,13.76,22.86,21.15,29.55,17.29,6.69-3.86,6.23-17.85-.2-34.23-4.89-1.92-10-4.36-15.11-7.32-7.13-4.12-12.88-9.6-17.42-15.15Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M123.83,86.24c6.71-2.54,14.43-4.41,22.66-4.41,5.91,0,11.55.43,16.75,1.22,13.76-10.98,21.15-22.86,17.29-29.55-3.86-6.69-17.85-6.23-34.24.2-1.92,4.89-4.36,10-7.32,15.11-4.12,7.13-9.6,12.88-15.15,17.42Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.17,113.76c-6.71,2.54-14.43,4.41-22.66,4.41-5.91,0-11.55-.43-16.75-1.22-13.76,10.97-21.15,22.86-17.29,29.55,3.86,6.69,17.85,6.23,34.24-.2,1.92-4.89,4.36-10,7.32-15.11,4.12-7.13,9.6-12.88,15.15-17.42Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.17,86.24c-5.55-4.54-11.03-10.3-15.15-17.42-2.95-5.12-5.4-10.22-7.32-15.11-16.38-6.42-30.37-6.89-34.24-.2-3.86,6.69,3.53,18.57,17.29,29.55,5.2-.78,10.84-1.22,16.75-1.22,8.23,0,15.96,1.87,22.66,4.41Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M123.83,113.76c5.55,4.54,11.03,10.3,15.15,17.42,2.95,5.12,5.4,10.22,7.32,15.11,16.38,6.42,30.37,6.89,34.24.2,3.86-6.69-3.53-18.57-17.29-29.55-5.2.78-10.84,1.22-16.75,1.22-8.23,0-15.96-1.87-22.66-4.41Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.76,76.17c4.54-5.55,10.3-11.03,17.42-15.15,5.12-2.95,10.22-5.4,15.11-7.32,6.43-16.38,6.89-30.37.2-34.24-6.69-3.86-18.57,3.53-29.55,17.29.78,5.2,1.22,10.84,1.22,16.75,0,8.23-1.87,15.96-4.41,22.66Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M86.24,123.83c-4.54,5.55-10.3,11.03-17.42,15.15-5.12,2.95-10.22,5.4-15.11,7.32-6.42,16.38-6.89,30.37-.2,34.23,6.69,3.86,18.57-3.53,29.55-17.29-.78-5.2-1.22-10.84-1.22-16.75,0-8.23,1.87-15.96,4.41-22.66Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M111.48,98.94c-.12-1.33-.47-2.59-1.01-3.75,3.99-2.17,8.7-5.13,13.36-8.94-5.64,2.13-10.55,4.73-14.43,7.1-.75-1.06-1.68-1.99-2.74-2.75,2.37-3.88,4.97-8.79,7.1-14.43-3.82,4.66-6.77,9.37-8.94,13.36-1.16-.53-2.42-.89-3.75-1.01.11-4.54-.09-10.1-1.06-16.04-.97,5.95-1.18,11.5-1.06,16.04-1.33.12-2.59.47-3.75,1.01-2.17-3.99-5.13-8.7-8.94-13.36,2.13,5.64,4.73,10.55,7.1,14.43-1.06.75-1.99,1.68-2.75,2.75-3.88-2.37-8.79-4.97-14.43-7.1,4.67,3.82,9.37,6.77,13.36,8.94-.53,1.16-.89,2.42-1.01,3.75-4.54-.11-10.1.09-16.04,1.06,5.95.97,11.5,1.18,16.04,1.06.12,1.33.47,2.59,1.01,3.75-3.99,2.17-8.7,5.13-13.36,8.94,5.64-2.13,10.55-4.73,14.43-7.1.75,1.06,1.68,1.99,2.75,2.75-2.37,3.88-4.97,8.79-7.1,14.43,3.82-4.67,6.77-9.37,8.94-13.36,1.16.53,2.42.89,3.75,1.01-.11,4.54.09,10.1,1.06,16.04.97-5.95,1.18-11.5,1.06-16.04,1.33-.12,2.59-.47,3.75-1.01,2.17,3.99,5.13,8.7,8.94,13.36-2.13-5.64-4.73-10.55-7.1-14.43,1.06-.75,1.99-1.68,2.74-2.75,3.88,2.37,8.79,4.97,14.43,7.1-4.67-3.82-9.37-6.77-13.36-8.94.53-1.16.89-2.42,1.01-3.75,4.54.11,10.1-.09,16.04-1.06-5.95-.97-11.5-1.18-16.04-1.06Z"
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

Flower15.displayName = "Flower15";
export { Flower15 };
