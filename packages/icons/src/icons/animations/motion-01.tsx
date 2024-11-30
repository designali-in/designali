import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Motion01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="12" y="12" width="10" height="10" rx="1.98" ry="1.98" />
        <path
          fill="none"
          d="M9.11,17c-1.16,0-2.11-.94-2.11-2.11v-5.79c0-1.16.94-2.11,2.11-2.11h5.79c1.16,0,2.11.94,2.11,2.11"
        />
        <path
          fill="none"
          d="M4.11,12c-1.16,0-2.11-.94-2.11-2.11v-5.79c0-1.16.94-2.11,2.11-2.11h5.79c1.16,0,2.11.94,2.11,2.11"
        />
      </svg>
    );
  },
);

export default Motion01;
