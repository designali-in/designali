import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MicOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="2" y1="2" x2="22" y2="22" />
        <path d="M18.89,13.23c.07-.41.11-.82.11-1.23v-2" />
        <path d="M5,10v2c-.06,3.87,3.03,7.04,6.9,7.1,1.92.03,3.76-.73,5.1-2.1" />
        <path d="M15,9.34v-4.34c0-1.66-1.36-2.99-3.02-2.98-1.13,0-2.16.64-2.66,1.65" />
        <path d="M9,9v3c0,1.66,1.35,3,3,3,.79,0,1.56-.32,2.12-.88" />
        <line x1="12" y1="19.1" x2="12" y2="22" />
      </svg>
    );
  },
);

export default MicOff;
