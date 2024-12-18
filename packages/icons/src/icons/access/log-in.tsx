import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LogIn = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.33,2h4.44c1.23,0,2.22.99,2.22,2.22v15.56c0,1.23-.99,2.22-2.22,2.22h-4.44" />
        <g>
          <polyline points="9.78 17.56 15.33 12 9.78 6.44" />
          <line x1="15.33" y1="12" x2="2" y2="12" />
        </g>
      </svg>
    );
  },
);

export default LogIn;
