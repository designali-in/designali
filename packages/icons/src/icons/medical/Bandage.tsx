import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bandage = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10 10.01h.01" />
        <path d="M10 14.01h.01" />
        <path d="M14 10.01h.01" />
        <path d="M14 14.01h.01" />
        <path d="M18 6v11.5" />
        <path d="M6 6v12" />
        <rect x="2" y="6" width="20" height="12" rx="2" />
      </svg>
    );
  },
);

export default Bandage;
