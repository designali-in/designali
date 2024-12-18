import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LoginSquare02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="2" width="20" height="20" rx="5.06" ry="5.06" />
        <g>
          <g>
            <polyline points="11.93 9.58 9.51 12 11.93 14.42" />
            <line x1="9.51" y1="12" x2="17.68" y2="12" />
          </g>
          <line x1="6.32" y1="8.83" x2="6.32" y2="15.17" />
        </g>
      </svg>
    );
  },
);

export default LoginSquare02;
