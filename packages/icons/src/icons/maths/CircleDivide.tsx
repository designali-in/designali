import * as React from "react";

import { DesignaliProps } from "../../types";

export const CircleDivide = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="8" x2="16" y1="12" y2="12" />
        <line x1="12" x2="12" y1="16" y2="16" />
        <line x1="12" x2="12" y1="8" y2="8" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default CircleDivide;
