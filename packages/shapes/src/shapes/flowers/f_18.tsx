import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower18: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-18";

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
            d="M180.53,53.5s-26.96-11.03-50.96-4.73c-6.54-23.94-29.57-41.77-29.57-41.77,0,0-23.03,17.83-29.57,41.77-24-6.3-50.96,4.73-50.96,4.73,0,0,3.93,28.86,21.38,46.5-17.46,17.63-21.38,46.5-21.38,46.5,0,0,26.96,11.03,50.96,4.73,6.54,23.94,29.57,41.77,29.57,41.77,0,0,23.03-17.83,29.57-41.77,24,6.3,50.96-4.73,50.96-4.73,0,0-3.93-28.86-21.38-46.5,17.46-17.63,21.38-46.5,21.38-46.5ZM100.09,115.2s-.06,0-.09,0-.06,0-.09,0c-2.88.72-6.09,1.23-9.54,1.48-1.51-3.11-2.67-6.15-3.49-9-.02-.03-.04-.05-.05-.08-.01-.03-.03-.06-.04-.08-2.07-2.13-4.11-4.66-6.05-7.52,1.94-2.86,3.99-5.39,6.05-7.52.01-.03.03-.06.04-.08.02-.03.04-.05.05-.08.81-2.85,1.98-5.89,3.49-9,3.45.25,6.66.76,9.54,1.48.03,0,.06,0,.09,0s.06,0,.09,0c2.88-.72,6.09-1.23,9.54-1.48,1.51,3.11,2.67,6.15,3.49,9,.02.03.04.05.05.08.02.03.03.06.04.08,2.07,2.13,4.11,4.66,6.05,7.52-1.94,2.86-3.99,5.39-6.05,7.52-.01.03-.03.06-.04.08-.01.03-.04.05-.05.08-.81,2.85-1.98,5.89-3.49,9-3.45-.25-6.66-.76-9.54-1.48Z"
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

Flower18.displayName = "Flower18";
export { Flower18 };
