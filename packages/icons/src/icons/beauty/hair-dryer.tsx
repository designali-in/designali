import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HairDryer = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M8.69,2.15c-2.89-.79-5.69,1.6-5.69,4.85s2.8,5.64,5.69,4.85c2.31-.63,5.51-2.27,7.93-2.05.88.08,1.5.84,2.32,1.07,1.11.3,1.54-1.37,1.78-2.12.36-1.14.36-2.37,0-3.51-.24-.75-.67-2.42-1.78-2.12-.82.22-1.45.99-2.32,1.07-2.42.22-5.63-1.42-7.93-2.05Z" />
        <path d="M5.5,11.5c1.37,1.41,1.27,3.77,1.32,5.88.02.88.68,1.62,1.53,1.62h1.22c.67,0,1.07-1.5,1.28-1.98.27-.63.16-1.35-.17-1.95-.69-1.27-1.18-2.07-.68-3.57" />
        <path d="M9,19c0,.93,0,1.4-.17,1.77-.23.49-.68.88-1.24,1.08-.42.15-1.52.15-2.59.15" />
        <path d="M16.62,4.2c.26.37.82,1.26.9,2.52.09,1.6-.66,2.74-.9,3.08" />
      </svg>
    );
  },
);

export default HairDryer;
