import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ToggleLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
        <circle cx="8" cy="12" r="2" />
      </svg>
    );
  },
);

export default ToggleLeft;
