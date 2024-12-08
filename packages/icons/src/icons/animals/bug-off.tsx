import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BugOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M15,7.13v-1.13c0-1.66-1.35-3-3-3-.8,0-1.57.32-2.14.9l-1.86-1.9"
        />

        <path fill="none" d="M22,13h-4v-2c0-2.21-1.79-4-4-4h-1.3" />
        <path fill="none" d="M20.97,5c0,2.1-1.6,3.8-3.5,4" />
        <path d="M7.7,7.7c-1.07.75-1.71,1.99-1.7,3.3v3c-.01,3.31,2.67,6.01,5.98,6.02,2.1,0,4.06-1.09,5.15-2.89" />
        <path fill="none" d="M12,20v-8" />
        <path d="M6,13H2" />
        <path fill="none" d="M3,21c0-2.1,1.7-3.9,3.8-4" />
        <path d="M14.12,3.88l1.88-1.88" />
        <path d="M2,2l20,20" />
      </svg>
    );
  },
);

export default BugOff;
