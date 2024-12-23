import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Baby04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2c-.99,0-1.8.78-1.8,1.75s.81,1.75,1.8,1.75c.46,0,.88-.17,1.2-.45" />
        <path d="M10,8h0M14,8h0" />
        <circle cx="12" cy="7.32" r="5.32" />
        <path d="M14.95,11.74c1.56.98,2.6,2.72,2.6,4.71,0,3.07-2.49,5.56-5.56,5.56s-5.56-2.49-5.56-5.56c0-1.98,1.04-3.72,2.6-4.71" />
        <line x1="11.51" y1="12.61" x2="17.24" y2="18.28" />
      </svg>
    );
  },
);

export default Baby04;
