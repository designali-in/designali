import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract12: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-12";

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
            d="M195.61,181.5V17.82l-22.16-12.79-.73-.43-.62.35v5.03l-12.07,6.97v16l12.07,6.97v129.33l-22.28,12.2v.73l.72.41,22.18-12.14,22.14,12.16.75-.44v-.69ZM172.72,196.96l-24.24-14V17.04l24.24-14,24.24,14v165.92l-24.24,14ZM122.89,181.5V17.82l-22.16-12.79-.73-.43-.61.35v77.77l-12.08,6.97v16l12.08,6.97v56.6l-22.29,12.2v.73l.72.41,22.18-12.14,22.15,12.16.75-.44v-.69ZM100,196.96l-24.24-14V17.04l24.24-14,24.24,14v165.92l-24.24,14ZM50.17,181.5V17.82L28.01,5.02l-.73-.43-.61.35v149.61l-12.08,6.97v14.33l-10.2,5.59v.73l.71.41,9.49-5.19v.13l13.86,8,12.81-7.4,8.17,4.49.75-.44v-.69ZM27.28,196.96l-24.24-14V17.04L27.28,3.04l24.24,14v165.92l-24.24,14ZM161.38,32.17v-13.81l11.62,6.97v13.55l-11.62-6.71ZM173.67,24.17l-11.49-6.9,11.71-6.76,11.49,6.63-11.7,7.03ZM174.34,39.13v-13.8l12.05-7.23v14.07l-12.05,6.96ZM88.66,104.91v-13.81l11.61,6.97v13.55l-11.61-6.7ZM100.95,96.9l-11.5-6.89,11.71-6.76,11.49,6.63-11.71,7.02ZM101.62,111.87v-13.8l12.05-7.23v14.08l-12.05,6.96ZM28.9,183.71v-13.8l12.05-7.24v14.07l-12.05,6.96ZM15.94,176.76v-13.81l11.62,6.97v13.54l-11.62-6.7ZM28.23,168.75l-11.5-6.89,11.71-6.76,11.49,6.63-11.71,7.02Z"
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

Abstract12.displayName = "Abstract12";
export { Abstract12 };
