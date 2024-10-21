import React, { forwardRef } from "react";

import { ShapeBase, ShapeType } from "../../lib";

const Flower42: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-42";

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
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="99.96 95.46 103.01 38.54 108.9 30.28 100 7.01 90.69 31.36 96.02 38.6 99.96 95.46"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="100.04 104.54 96.99 161.46 91.1 169.72 100 192.99 109.31 168.64 103.98 161.4 100.04 104.54"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="104.54 99.96 161.46 103.01 169.72 108.9 192.99 100 168.64 90.69 161.4 96.02 104.54 99.96"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="95.46 100.04 38.54 96.99 30.28 91.1 7.01 100 31.36 109.31 38.6 103.98 95.46 100.04"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="97.7 96.09 71.88 45.27 72.85 35.17 53.5 19.47 57.62 45.21 65.85 48.82 97.7 96.09"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="102.3 103.91 128.12 154.73 127.15 164.83 146.5 180.53 142.38 154.79 134.15 151.18 102.3 103.91"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="103.91 97.7 154.73 71.88 164.83 72.85 180.53 53.5 154.79 57.62 151.18 65.85 103.91 97.7"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="96.09 102.3 45.27 128.12 35.17 127.15 19.47 146.5 45.21 142.38 48.82 134.15 96.09 102.3"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="96.05 97.76 48.28 66.67 44.07 57.43 19.47 53.5 35.9 73.75 44.83 72.75 96.05 97.76"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="103.95 102.24 151.72 133.33 155.93 142.57 180.53 146.5 164.1 126.25 155.17 127.25 103.95 102.24"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="102.24 96.05 133.33 48.28 142.57 44.07 146.5 19.47 126.25 35.9 127.25 44.83 102.24 96.05"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="97.76 103.95 66.67 151.72 57.43 155.93 53.5 180.53 73.75 164.1 72.75 155.17 97.76 103.95"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="101.18 95.61 119.28 41.57 126.25 35.9 123.36 9.99 108.9 30.28 112.52 39.76 101.18 95.61"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="98.82 104.39 80.72 158.43 73.75 164.1 76.64 190.01 91.1 169.72 87.48 160.24 98.82 104.39"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="169.72 108.9 160.24 112.52 104.39 101.18 158.43 119.28 164.1 126.25 190.01 123.36 169.72 108.9"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="95.61 98.82 41.57 80.72 35.9 73.75 9.99 76.64 30.28 91.1 39.76 87.48 95.61 98.82"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="98.82 95.61 87.48 39.76 90.69 31.36 75.22 10.37 72.85 35.17 80.72 41.57 98.82 95.61"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="101.18 104.39 112.52 160.24 109.31 168.64 124.78 189.63 127.15 164.83 119.28 158.43 101.18 104.39"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="104.39 98.82 160.24 87.48 168.64 90.69 189.63 75.22 164.83 72.85 158.43 80.72 104.39 98.82"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="95.61 101.18 39.76 112.52 31.36 109.31 10.37 124.78 35.17 127.15 41.57 119.28 95.61 101.18"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="96.79 96.79 59.03 54.09 57.62 45.21 33.73 34.77 44.07 57.43 54.09 59.03 96.79 96.79"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="103.21 103.21 140.97 145.91 142.38 154.79 166.27 165.23 155.93 142.57 145.91 140.97 103.21 103.21"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="103.21 96.79 145.91 59.03 154.79 57.62 165.23 33.73 142.57 44.07 140.97 54.09 103.21 96.79"
          />
          <polygon
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            points="96.79 103.21 54.09 140.97 45.21 142.38 34.77 166.27 57.43 155.93 59.03 145.91 96.79 103.21"
          />

          <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z"
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

Flower42.displayName = "Flower42";
export { Flower42 };
