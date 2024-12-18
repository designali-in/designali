import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Link2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9,17h-2c-2.76,0-5-2.24-5-5s2.24-5,5-5h2" />
        <path d="M15,7h2c2.76,0,5,2.24,5,5s-2.24,5-5,5h-2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    );
  },
);

export default Link2;
