import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract179: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-179";

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
            d="M198.1,79.25h-48l33.94-33.94-29.35-29.35-33.94,33.94V1.9h-41.5v48L45.31,15.96l-29.35,29.35,33.94,33.94H1.9v41.5h48l-33.94,33.94,29.35,29.35,33.94-33.94v48h41.5v-48l33.94,33.94,29.35-29.35-33.94-33.94h48v-41.5h0ZM7.66,115v-29.99h48l15,15-15,15H7.66ZM79.25,141.96l-33.94,33.94-21.21-21.21,33.94-33.94h21.21v21.21h0ZM79.25,115h-15.45l10.93-10.93,4.53,4.53v6.4h0ZM79.25,100.46l-.46-.46.46-.46v.91ZM79.25,91.4l-4.53,4.53-10.93-10.93h15.45v6.4h0ZM79.25,79.25h-21.21L24.1,45.31l21.21-21.21,33.94,33.94v21.21h0ZM85,63.79l10.93,10.93-4.53,4.53h-6.4v-15.45h0ZM85,85h.65l-.65.65v-.65ZM85,114.35l.65.65h-.65v-.65ZM85,120.75h6.4l4.53,4.53-10.93,10.93v-15.45h0ZM115,192.34h-29.99v-48l15-15,15,15v48ZM99.54,120.75h.91l-.46.46-.46-.46ZM115,136.21l-10.93-10.93,4.53-4.53h6.4v15.45h0ZM115,115h-.65l.65-.65v.65ZM115,106.21l-8.79,8.79h-12.42l-8.79-8.79v-12.42l8.79-8.79h12.42l8.79,8.79v12.42ZM99.54,79.25l.46-.46.46.46h-.91ZM115,85.65l-.65-.65h.65v.65ZM115,79.25h-6.4l-4.53-4.53,10.93-10.93v15.45h0ZM115,55.66l-15,15-15-15V7.66h29.99v48h0ZM120.75,58.04l33.94-33.94,21.21,21.21-33.94,33.94h-21.21v-21.21h0ZM120.75,85h15.45l-10.93,10.93-4.53-4.53v-6.4h0ZM120.75,99.54l.46.46-.46.46v-.91ZM120.75,108.6l4.53-4.53,10.93,10.93h-15.45v-6.4h0ZM175.9,154.69l-21.21,21.21-33.94-33.94v-21.21h21.21l33.94,33.94h0ZM192.34,115h-48l-15-15,15-15h48v29.99Z"
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

Abstract179.displayName = "Abstract179";
export { Abstract179 };
