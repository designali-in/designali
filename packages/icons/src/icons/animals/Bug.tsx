import * as React from "react";

import type { DesignaliProps } from "../types";

export const Bug = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M8,2.5l1.88,1.88" />
        <path fill="none" d="M14.12,4.38l1.88-1.88" />
        <path d="M9,7.63v-1c-.07-1.66,1.21-3.06,2.87-3.13,1.66-.07,3.06,1.21,3.13,2.87,0,.09,0,.18,0,.27v1" />
        <path d="M12,20.5c-3.3,0-6-2.7-6-6v-3c0-2.21,1.79-4,4-4h4c2.21,0,4,1.79,4,4v3c0,3.3-2.7,6-6,6" />
        <path d="M12,20.5v-9" />
        <path fill="none" d="M6.53,9.5c-1.93-.2-3.53-1.9-3.53-4" />
        <path d="M6,13.5H2" />
        <path fill="none" d="M3,21.5c0-2.1,1.7-3.9,3.8-4" />
        <path fill="none" d="M20.97,5.5c0,2.1-1.6,3.8-3.5,4" />
        <path d="M22,13.5h-4" />
        <path fill="none" d="M17.2,17.5c2.1.1,3.8,1.9,3.8,4" />
      </svg>
    );
  },
);

export default Bug;
