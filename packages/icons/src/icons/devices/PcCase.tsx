import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PcCase = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M15 14h.01" />
        <path d="M9 6h6" />
        <path d="M9 10h6" />
      </svg>
    );
  },
);

export default PcCase;
