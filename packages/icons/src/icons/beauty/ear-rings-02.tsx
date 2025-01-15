import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EarRings02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.13,14.23c3.83,0,2.55,4.44,6.38,4.44" />
        <path d="M14.24,14.23c3.94,0,2.63,4.44,6.57,4.44" />
        <path d="M9.73,6.71c-.39-.22-.99-.58-1.13-2.71-.13-1.89-1.85-2.08-2.5-1.95-.62.13-1.78.78-1.85,2.13-.05.91.51,1.78,1.85,2.31.22.09.38.3.38.54v2.48" />
        <path d="M20.8,6.71c-.39-.22-.99-.58-1.13-2.71-.13-1.89-1.85-2.08-2.5-1.95-.62.13-1.78.78-1.85,2.13-.05.91.51,1.78,1.85,2.31.22.09.38.3.38.54v2.48" />
        <ellipse cx="17.61" cy="15.76" rx="3.39" ry="6.24" />
        <ellipse cx="6.45" cy="15.76" rx="3.39" ry="6.24" />
      </svg>
    );
  },
);

export default EarRings02;
