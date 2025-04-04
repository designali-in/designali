import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Replace = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14 4a2 2 0 0 1 2-2" />
        <path d="M16 10a2 2 0 0 1-2-2" />
        <path d="M20 2a2 2 0 0 1 2 2" />
        <path d="M22 8a2 2 0 0 1-2 2" />
        <path d="m3 7 3 3 3-3" />
        <path d="M6 10V5a3 3 0 0 1 3-3h1" />
        <rect x="2" y="14" width="8" height="8" rx="2" />
      </svg>
    );
  },
);

export default Replace;
