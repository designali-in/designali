import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TransitionTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.24,8.68l-3.24-3.24-3.24,3.24" />
        <path d="M12,13.99V5.43" />
        <rect x="2" y="13.99" width="20" height="8.01" rx="1.43" ry="1.43" />
        <path
          fill="none"
          d="M2,8.59V3.43c0-.79.64-1.43,1.43-1.43h17.15c.79,0,1.43.64,1.43,1.43v5.16"
        />
      </svg>
    );
  },
);

export default TransitionTop;
