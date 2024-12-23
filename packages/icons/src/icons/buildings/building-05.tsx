import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="3.23" y1="22" x2="21.3" y2="22" />

        <path d="M18,9h-4c-2.48,0-3,.52-3,3v10h10v-10c0-2.48-.52-3-3-3Z" />
        <path d="M15,22H3V5c0-2.48.52-3,3-3h6c2.48,0,3,.52,3,3v4" />
        <line x1="15.11" y1="15.84" x2="16.89" y2="15.84" />
        <line x1="15.11" y1="12.16" x2="16.89" y2="12.16" />
        <line x1="16.04" y1="19" x2="16.04" y2="22" />
        <line x1="3.23" y1="9.46" x2="6.51" y2="9.46" />
        <line x1="3.23" y1="12.99" x2="6.51" y2="12.99" />
        <line x1="3.23" y1="5.79" x2="6.51" y2="5.79" />
      </svg>
    );
  },
);

export default Building05;
