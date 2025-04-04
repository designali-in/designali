import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Mouse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <path d="M12 6v4" />
      </svg>
    );
  },
);

export default Mouse;
