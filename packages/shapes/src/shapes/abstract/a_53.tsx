import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract53: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-53";

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
            d="M100.07,100.1l-.16.16v-.46s.22.23.22.23l-.06.07ZM100.1,100.07l-.07-.04.06.06-.07.07-.11-.08v-.07s0-.1,0-.1h.35l-.15.16ZM99.77,99.93l.23-.02h.1v.35l-.32-.32ZM100.02,100.02h0s20.38,0,20.38,0l8.43,11.93,40.8,57.69-69.61-69.61ZM99.88,100.02l.1-.1h.13v.32l-.24-.23ZM100.02,100.11h-.24l.32-.33v.32s-.09,0-.09,0ZM99.77,100.1l.35-.35v.35h-.35ZM100.23,99.9h.02v.02s20.08,0,20.08,0l48.58-68.7-68.69,68.69ZM120.51,100l.06.1-.17.02h-20.48v-.17L169.57,30.3l.15.12-49.2,69.58ZM100.02,99.98v-20.39l11.93-8.43,57.69-40.8-69.61,69.61ZM99.93,79.67L31.22,31.09l68.71,68.71v-20.12ZM100,100.13L30.3,30.43l.12-.15,69.58,49.2.12-.08v20.61l-.12.12ZM99.99,100.11h-.24l.23-.24.23.23h-.23ZM100.12,100.25v20.11l68.66,48.55-68.66-68.66ZM169.58,169.72l-69.65-49.26v-20.66l69.78,69.78-.12.15ZM100,120.39l-11.95,8.44-57.69,40.8,69.62-69.62h.02v.02h0s.01-.02.01-.02h0v20.39l-.02-.02ZM31.09,168.78l68.67-68.67h-20.11l-48.56,68.67ZM30.43,169.7l-.15-.12,49.26-69.66h20.67L30.43,169.7ZM99.98,100h.01s0,.02,0,.02h-20.39v-.02s-8.43-11.95-8.43-11.95L30.36,30.36l69.64,69.64h-.02ZM100,198.48v-78.09l.02.02,11.93,8.43-11.95,69.64ZM120.58,100.1l8.31,11.75,68.48-11.75h-76.78ZM128.8,112.05l-.04-.05-8.55-12.09h78.27l.02.19-69.7,11.95ZM120.39,100l8.45-11.95,69.64,11.95h-78.09ZM100.1,2.64v76.78l11.75-8.3L100.1,2.64ZM112,71.24l-12.09,8.55V1.52l.19-.02,11.95,69.7-.05.04ZM99.9,120.58l-11.75,8.3,11.75,68.48v-76.78ZM99.9,198.5l-11.95-69.7.05-.04,12.09-8.55v78.27l-.19.02ZM79.6,100.02l-8.43,11.93L1.52,100h78.09v.02ZM71.12,88.16L2.64,99.9h76.78l-8.31-11.75ZM1.52,100.1l-.02-.19,69.7-11.95.04.05,8.55,12.09H1.52ZM88.05,71.16L100,1.52v78.09l-11.95-8.45Z"
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

Abstract53.displayName = "Abstract53";
export { Abstract53 };
