import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpToLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5 3h14" />
        <path d="m18 13-6-6-6 6" />
        <path d="M12 7v14" />
      </svg>
    );
  },
);

export default ArrowUpToLine;
