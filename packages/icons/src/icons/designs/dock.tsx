import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,8h20" />
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <path d="M6,16h12" />
      </svg>
    );
  },
);

export default Dock;
