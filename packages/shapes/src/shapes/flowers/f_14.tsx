import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower14: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-14";

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
            d="M100,99.92c1.02-1.42,18.57-25.68,33.26-33.18,1.38-2.69,2.2-5.29,2.2-7.67,0-15.75-35.45-52.06-35.45-52.06,0,0-35.45,36.31-35.45,52.06,0,2.38.82,4.98,2.2,7.67,14.69,7.5,32.24,31.76,33.26,33.18Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100,100.08c-1.02,1.42-18.57,25.68-33.26,33.18-1.38,2.69-2.2,5.29-2.2,7.67,0,15.75,35.45,52.06,35.45,52.06,0,0,35.45-36.31,35.45-52.06,0-2.38-.82-4.98-2.2-7.67-14.69-7.5-32.24-31.76-33.26-33.18Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.99,100s-36.31-35.45-52.06-35.45c-2.38,0-4.98.82-7.67,2.2-7.5,14.69-31.76,32.24-33.18,33.26,1.42,1.02,25.68,18.57,33.18,33.26,2.69,1.38,5.29,2.2,7.67,2.2,15.75,0,52.06-35.45,52.06-35.45Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.06,100s-.02.03-.02.03c.01,0,.02-.02.05-.03-.02-.02-.04-.03-.05-.03,0,0,.02.03.02.03Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.92,100c-1.42-1.02-25.68-18.57-33.18-33.26-2.69-1.38-5.29-2.2-7.67-2.2-15.75,0-52.06,35.45-52.06,35.45,0,0,36.31,35.45,52.06,35.45,2.38,0,4.98-.82,7.67-2.2,7.5-14.69,31.76-32.24,33.18-33.26Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.97,99.97s-.02.02-.05.03c.02.02.04.03.05.03,0,0-.02-.03-.02-.03,0,0,.02-.03.02-.03Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.03,99.97s-.02-.02-.03-.05c-.02.03-.03.04-.03.05,0,0,.03-.02.03-.02,0,0,.03.02.03.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.97,100.03s.02.02.03.05c.02-.02.03-.04.03-.05,0,0-.03.02-.03.02,0,0-.03-.02-.03-.02Z"
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

Flower14.displayName = "Flower14";
export { Flower14 };
