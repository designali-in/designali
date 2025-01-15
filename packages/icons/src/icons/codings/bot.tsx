import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bot = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,8v-4h-4" />
        <rect x="4" y="8" width="16" height="12" rx="2" ry="2" />
        <path d="M2,14h2" />
        <path d="M20,14h2" />
        <path d="M15,13v2" />
        <path d="M9,13v2" />
      </svg>
    );
  },
);

export default Bot;
