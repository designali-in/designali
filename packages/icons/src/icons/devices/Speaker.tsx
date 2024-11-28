import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Speaker = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M12 6h.01" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 14h.01" />
      </svg>
    );
  },
);

export default Speaker;
