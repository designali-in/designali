import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PawPrint = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="20" cy="16" r="2" />
        <path d="M9,10c2.76,0,5,2.24,5,5v3.5c0,1.93-1.57,3.5-3.5,3.5-1.53,0-2.88-.99-3.34-2.45-.43-1.38-1.33-2.28-2.7-2.7-1.84-.58-2.87-2.54-2.29-4.39.46-1.46,1.81-2.45,3.33-2.45h3.5Z" />
      </svg>
    );
  },
);

export default PawPrint;
