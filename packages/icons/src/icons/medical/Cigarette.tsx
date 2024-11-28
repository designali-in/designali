import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cigarette = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      >
        <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
        <path d="M18 8c0-2.5-2-2.5-2-5" />
        <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M22 8c0-2.5-2-2.5-2-5" />
        <path d="M7 12v4" />
      </svg>
    );
  },
);

export default Cigarette;
