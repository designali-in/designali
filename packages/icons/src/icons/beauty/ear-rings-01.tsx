import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EarRings01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.04,7.98c0-.96.77-1.73,1.73-1.73s1.73.77,1.73,1.73c0,1.32-1.73,1.34-1.73,2.31v3.46" />
        <path d="M5.5,3.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5c0,1.15-1.5,1.16-1.5,2v3" />
        <path d="M20.46,18.3c.79-.77,1.58-1.69,1.58-2.9,0-1.6-1.3-2.9-2.9-2.9-.93,0-1.58.26-2.37,1.05-.79-.79-1.44-1.05-2.37-1.05-1.6,0-2.9,1.3-2.9,2.9,0,1.21.79,2.13,1.58,2.9l3.69,3.69,3.69-3.69Z" />
        <path d="M11.97,10.23c0-1.51-1.22-2.73-2.73-2.73-.87,0-1.49.25-2.24.99-.75-.75-1.36-.99-2.24-.99-1.51,0-2.73,1.22-2.73,2.73,0,1.14.75,2.01,1.49,2.73l3.48,3.48" />
      </svg>
    );
  },
);

export default EarRings01;
