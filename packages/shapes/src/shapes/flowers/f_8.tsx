import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower8: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-8";

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
            d="M100.03,91.21c.55-11.9,3.61-33.4,17.75-47.55,2.83-2.83,5.76-5.41,8.73-7.74-1.21-9.96-3.91-18.84-7.62-25.73-4.94-9.2-11.64,4.44-18.89,4.44s-14.17-13.45-19.14-3.98c-3.57,6.81-6.17,15.48-7.36,25.19,2.98,2.34,5.92,4.92,8.77,7.77,14.16,14.16,17.21,35.71,17.75,47.6Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.06,99.9s-.03,0-.03,0c0,0,0-.07-.01-.18,0,.08,0,.13,0,.13,0,0-.05,0-.12,0,.07.06.11.1.11.1,0,0,.03-.03.06-.05Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.98,100.07c0,.15.03.49.05.96.02-.43.03-.74.05-.92-.04-.03-.07-.06-.07-.06,0,0-.02.02-.03.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.03,107.46c-.4,11.6-3.17,34.11-17.8,48.74-2.84,2.84-5.77,5.42-8.74,7.75,1.2,10.01,3.91,18.93,7.63,25.85,4.94,9.2,11.64-4.44,18.89-4.44s14.18,13.45,19.14,3.98c3.6-6.87,6.23-15.65,7.4-25.47-2.96-2.33-5.88-4.9-8.71-7.73-14.61-14.61-17.4-37.07-17.8-48.69Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M185.36,99.93c0-7.37,13.45-14.18,3.98-19.14-6.84-3.58-15.57-6.2-25.33-7.38-2.33,2.97-4.91,5.91-7.75,8.74-14.11,14.11-35.55,17.19-47.46,17.75,11.91.55,33.38,3.62,47.51,17.75,2.85,2.85,5.44,5.79,7.78,8.78,9.95-1.21,18.82-3.91,25.71-7.61,9.2-4.94-4.44-11.64-4.44-18.89Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.05,99.93s.02.03.03.04c0-.02,0-.05,0-.05,0,0,.04,0,.07,0-.05,0-.07,0-.09,0,0,0-.02.03-.02.03Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.56,99.91c-11.59-.39-34.13-3.16-48.78-17.8-2.82-2.82-5.39-5.74-7.72-8.7-10.02,1.2-18.95,3.91-25.87,7.63-9.2,4.94,4.44,11.64,4.44,18.89s-13.45,14.18-3.98,19.14c6.84,3.59,15.57,6.2,25.34,7.38,2.33-2.97,4.91-5.9,7.74-8.74,14.66-14.66,37.24-17.42,48.82-17.8Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.89,99.85c-.17.01-.55.03-1.07.05.64.03,1.02.05,1.11.06,0,0,.03-.03.03-.03,0,0-.02-.03-.07-.07Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.21,93.76c8.81-8.03,26.17-21.04,46.15-21.04,4.01,0,7.91.25,11.66.7,6.2-7.91,10.58-16.12,12.85-23.62,3.01-10-11.37-5.09-16.5-10.22-5.21-5.21-.51-19.53-10.72-16.35-7.37,2.3-15.4,6.63-23.14,12.7.46,3.77.71,7.69.71,11.72,0,19.95-12.98,37.29-21.01,46.11Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.1,99.87s-.02.02-.03.03c0,0,0,0,0,0,0,0,.01-.02.03-.03Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.21,93.76c-3.64,3.32-5.81,5.77-6.11,6.12.48-.42,2.9-2.59,6.11-6.12Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.72,105.24c-8.48,7.92-26.37,21.9-47.08,21.9-4.01,0-7.9-.25-11.65-.7-6.21,7.91-10.59,16.12-12.85,23.63-3.01,10,11.37,5.09,16.5,10.22s.51,19.53,10.72,16.35c7.37-2.3,15.39-6.62,23.12-12.69-.45-3.73-.69-7.61-.69-11.59,0-20.74,14.02-38.65,21.93-47.11Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.92,99.96c-.06.07-.32.37-.78.86.48-.45.78-.7.83-.75,0-.07,0-.11,0-.11,0,0-.03,0-.05,0Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.72,105.24c2.08-1.94,3.57-3.5,4.42-4.42-.91.84-2.47,2.34-4.42,4.42Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.79,100.76c-.41-.45-.65-.72-.71-.79,0,.03,0,.07,0,.14.1.09.35.31.72.65Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.34,105.3c7.92,8.49,21.88,26.37,21.88,47.05,0,3.96-.24,7.81-.68,11.51,7.92,6.22,16.14,10.61,23.66,12.87,10,3.01,5.09-11.37,10.22-16.5,5.21-5.21,19.53-.51,16.35-10.72-2.3-7.36-6.61-15.36-12.66-23.09-3.78.46-7.7.71-11.74.71-20.66,0-38.51-13.91-47.01-21.84Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M105.34,105.3c-2.02-2.17-3.64-3.71-4.55-4.54.85.92,2.39,2.53,4.55,4.54Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.16,99.91c.64.04,3.88.22,8.65,0-4.92-.23-8.2-.03-8.65,0Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.03,107.46c.1-2.96.05-5.2,0-6.43-.05,1.25-.1,3.48,0,6.43Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M93.86,93.82c-8.03-8.8-21.07-26.17-21.07-46.17,0-4.06.25-8.01.72-11.8-7.9-6.19-16.1-10.57-23.6-12.83-10-3.01-5.09,11.37-10.22,16.5-5.21,5.21-19.53.51-16.35,10.72,2.31,7.38,6.64,15.42,12.73,23.17,3.73-.45,7.6-.69,11.58-.69,20.03,0,37.42,13.08,46.21,21.1Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M99.87,99.83s.01.02.02.02c0,0,0,0,0,0,0,0-.02-.02-.02-.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M93.86,93.82c3.11,3.41,5.46,5.53,6.01,6.02-.43-.49-2.55-2.86-6.01-6.02Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.03,91.21c-.21,4.61-.05,7.77,0,8.51.04-.64.22-3.83,0-8.51Z"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.56,99.91c2.84.1,5,.05,6.25,0-1.23-.05-3.4-.1-6.25,0Z"
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

Flower8.displayName = "Flower8";
export { Flower8 };
