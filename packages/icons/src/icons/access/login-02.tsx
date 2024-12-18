import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Login02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.68,2l-.74.26c-2.87,1.01-4.3,1.52-5.11,2.67-.82,1.15-.82,2.67-.82,5.71v2.72c0,3.04,0,4.56.82,5.71.82,1.15,2.25,1.66,5.11,2.67l.74.26" />
        <g>
          <polyline points="15.14 7.1 10.23 12 15.14 16.9" />
          <line x1="10.23" y1="12" x2="22" y2="12" />
        </g>
      </svg>
    );
  },
);

export default Login02;
