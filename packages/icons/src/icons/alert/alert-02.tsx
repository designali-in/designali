import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Alert02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.59,4.78L2.52,15.29c-1.52,2.62.38,5.9,3.41,5.9h12.14c3.03,0,4.92-3.28,3.41-5.9l-6.07-10.51c-1.52-2.62-5.3-2.62-6.82,0Z" />
        <line x1="12" y1="8.37" x2="12" y2="12.02" />
        <circle cx="12" cy="15.48" r=".15" />
      </svg>
    );
  },
);

export default Alert02;
