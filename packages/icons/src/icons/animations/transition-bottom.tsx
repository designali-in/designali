import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TransitionBottom = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M8.76,15.31l3.24,3.24,3.24-3.24" />
        <path d="M12,10v8.55" />

        <path
          fill="none"
          d="M2,16c0,2.34,0,3.51.54,4.36.28.45.66.82,1.1,1.1.85.54,2.02.54,4.36.54h8c2.34,0,3.51,0,4.36-.54.45-.28.82-.66,1.1-1.1.54-.85.54-2.02.54-4.36"
        />
        <rect x="2" y="1.99" width="20" height="8.01" rx="1.43" ry="1.43" />
      </svg>
    );
  },
);

export default TransitionBottom;
