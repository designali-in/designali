import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Microwave = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="20" height="15" x="2" y="4" rx="2" />
        <rect width="8" height="7" x="6" y="8" rx="1" />
        <path d="M18 8v7" />
        <path d="M6 19v2" />
        <path d="M18 19v2" />
      </svg>
    );
  },
);

export default Microwave;
