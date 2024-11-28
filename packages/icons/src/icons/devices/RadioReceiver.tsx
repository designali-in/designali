import * as React from "react";

import type { DesignaliProps } from "../../types";

export const RadioReceiver = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M5 16v2" />
        <path d="M19 16v2" />
        <rect width="20" height="8" x="2" y="8" rx="2" />
        <path d="M18 12h.01" />
      </svg>
    );
  },
);

export default RadioReceiver;
