import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Abstract8: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "abstract-8";

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
            d="M182.13,54.07c-.01-.18-.04-.36-.08-.54,0-.04-.02-.07-.03-.1-.06-.21-.14-.4-.24-.59-.01-.02-.02-.04-.03-.06-.27-.46-.66-.84-1.14-1.09L101.46,5.95s-.05-.02-.07-.03c-.41-.22-.86-.34-1.32-.35-.05,0-.1,0-.15,0-.19,0-.37.03-.55.07-.05.01-.1.02-.15.03-.22.06-.44.15-.65.27L19.4,51.67c-.38.2-.72.48-.98.82,0,0,0,0,0,0-.07.09-.12.18-.18.27-.01.02-.02.04-.03.06-.02.03-.04.07-.05.1,0,.02-.02.04-.03.06-.06.13-.11.26-.15.4,0,.02-.02.05-.03.07,0,0,0,.02,0,.03,0,.02,0,.03,0,.05-.03.11-.04.22-.05.33-.01.09-.02.18-.03.27,0,.03,0,.06,0,.09v91.56s0,.05,0,.07c0,.2.03.39.08.58.02.1.06.19.09.29.04.11.08.21.13.31.05.11.11.22.17.32.04.05.08.1.12.15.18.24.4.46.65.63.01.01.03.02.04.03.06.04.1.09.16.13l79.08,45.63c.05.03.11.06.16.09l.05.03s0,0,.01,0c.21.12.43.21.67.28.01,0,.03,0,.04.01.23.06.47.1.71.1s.47-.04.69-.09c.06-.02.13-.04.19-.06.15-.05.3-.11.44-.18.05-.02.1-.03.14-.06l79.24-45.75c.06-.03.11-.09.16-.13.01,0,.03-.02.04-.03.26-.18.48-.4.66-.65.04-.05.07-.09.11-.14.07-.1.12-.21.18-.33.05-.1.09-.2.13-.3.03-.1.07-.19.09-.29.04-.19.07-.38.08-.58,0-.02,0-.05,0-.07V54.77c.02-.23.02-.47-.02-.7ZM133.95,31.41l-73.47,42.43-14.09-8.13L119.88,23.28l14.08,8.14ZM153.82,42.89l-73.45,42.43-14.09-8.13,73.46-42.43,14.08,8.14ZM40.61,62.37l-14.09-8.13L100.01,11.8l14.08,8.14L40.61,62.37ZM57.46,78.79v84.86l-14.02-8.09v-84.86l14.02,8.09ZM63.26,82.13l14.02,8.09v84.86l-14.02-8.09v-84.86ZM83.07,93.57l14.02,8.09v84.86l-14.02-8.09v-84.86ZM102.89,136.26v-34.31l14.02-8.1v84.59l-14.02,8.09v-50.27ZM122.7,90.51l14.02-8.1v84.59l-14.02,8.1v-84.59ZM142.52,79.06l14.02-8.1v84.6l-14.02,8.1v-84.6ZM162.33,67.62l14.02-8.1v84.6l-14.02,8.1v-84.6ZM158.01,63.17c-.07.04-.15.08-.22.13l-19.59,11.31c-.08.04-.16.08-.23.13l-19.64,11.34c-.06.03-.12.06-.17.1l-18.16,10.48-13.85-7.99,73.45-42.42,13.86,8.01-15.45,8.92ZM23.62,59.26l14.02,8.09v84.86l-14.02-8.09V59.26Z"
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

Abstract8.displayName = "Abstract8";
export { Abstract8 };
