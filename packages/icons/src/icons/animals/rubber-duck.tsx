import * as React from "react";

import type { DesignaliProps } from "../../types";

export const RubberDuck = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.5,6h0" />
        <path d="M4.63,6c.44-1.73,2.01-3,3.87-3,2.21,0,4,1.79,4,4,0,1.19-.52,2.27-1.35,3h5.83c1.38,0,2.02-1.12,2.02-2.5,3.5,3.5,2.97,7.5,2.97,7.5,0,3.5-3.47,6-8.97,6h-4.01c-3.03,0-5.49-2.46-5.49-5.5,0-2.19,1.28-4.08,3.13-4.97-.66-.35-1.22-.89-1.59-1.53M4.63,6l-2.63,1c.19,1,1.06,2,3.04,2M4.63,6l.59.85c.46.67.38,1.56-.18,2.15" />
        <path d="M11.19,17.76h1.36c2,0,4.52-2.52,4.52-4.52h-5.87c-1.25,0-2.26,1.01-2.26,2.26s1.01,2.26,2.26,2.26Z" />
      </svg>
    );
  },
);

export default RubberDuck;
