import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower32: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-32";

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
            d="M192.99,100c0-14.7-11.92-26.62-26.62-26.62-.79,0-1.58.04-2.36.11.6-.5,1.18-1.03,1.74-1.59,10.4-10.4,10.4-27.25,0-37.65-10.4-10.4-27.25-10.4-37.65,0-.56.56-1.09,1.15-1.59,1.74.07-.78.11-1.56.11-2.36,0-14.7-11.92-26.62-26.62-26.62s-26.62,11.92-26.62,26.62c0,.79.04,1.58.11,2.36-.5-.6-1.03-1.18-1.59-1.74-10.4-10.4-27.25-10.4-37.65,0-10.4,10.4-10.4,27.25,0,37.65.56.56,1.15,1.09,1.74,1.59-.78-.07-1.56-.11-2.36-.11-14.7,0-26.62,11.92-26.62,26.62s11.92,26.62,26.62,26.62c.79,0,1.58-.04,2.36-.11-.6.5-1.18,1.03-1.74,1.59-10.4,10.4-10.4,27.25,0,37.65,10.4,10.4,27.25,10.4,37.65,0,.56-.56,1.09-1.15,1.59-1.74-.07.78-.11,1.56-.11,2.36,0,14.7,11.92,26.62,26.62,26.62s26.62-11.92,26.62-26.62c0-.79-.04-1.58-.11-2.36.5.6,1.03,1.18,1.59,1.74,10.4,10.4,27.25,10.4,37.65,0,10.4-10.4,10.4-27.25,0-37.65-.56-.56-1.15-1.09-1.74-1.59.78.07,1.56.11,2.36.11,14.7,0,26.62-11.92,26.62-26.62ZM149.28,120.41c-7.57-.67-15.38,1.89-21.18,7.69-5.8,5.8-8.36,13.6-7.69,21.18-4.88-5.83-12.21-9.54-20.41-9.54s-15.53,3.71-20.41,9.54c.67-7.57-1.89-15.38-7.69-21.18-5.8-5.8-13.6-8.36-21.18-7.69,5.83-4.88,9.54-12.21,9.54-20.41s-3.71-15.53-9.54-20.41c7.57.67,15.38-1.89,21.18-7.69,5.8-5.8,8.36-13.6,7.69-21.18,4.88,5.83,12.21,9.54,20.41,9.54s15.53-3.71,20.41-9.54c-.67,7.57,1.89,15.38,7.69,21.18s13.6,8.36,21.18,7.69c-5.83,4.88-9.54,12.21-9.54,20.41s3.71,15.53,9.54,20.41Z"
          ></path>
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

Flower32.displayName = "Flower32";
export { Flower32 };
