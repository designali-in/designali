import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LogOut = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.67,22h-4.44c-1.23,0-2.22-.99-2.22-2.22V4.22c0-1.23.99-2.22,2.22-2.22h4.44" />
        <polyline points="16.44 17.56 22 12 16.44 6.44" />
        <line x1="22" y1="12" x2="8.67" y2="12" />
      </svg>
    );
  },
);

export default LogOut;
