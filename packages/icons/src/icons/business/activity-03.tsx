import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Activity03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.33,12h2.78l2.22-4.44,3.33,8.89,2.22-4.44h2.78" />
        <rect x="2" y="2" width="20" height="20" rx="4.33" ry="4.33" />
      </svg>
    );
  },
);

export default Activity03;
