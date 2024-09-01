import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FlagOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M8 2c3 0 5 2 8 2s4-1 4-1v11" />
        <path d="M4 22V4" />
        <path d="M4 15s1-1 4-1 5 2 8 2" />
        <line x1="2" x2="22" y1="2" y2="22" />
      </svg>
    );
  },
);

export default FlagOff;
