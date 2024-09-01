import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CircleGauge = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M13.4 10.6 19 5" />
      </svg>
    );
  },
);

export default CircleGauge;
