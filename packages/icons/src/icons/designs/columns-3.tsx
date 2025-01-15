import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Columns3 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="2" width="20" height="20" rx="2.22" ry="2.22" />
        <path d="M8.67,2v20" />
        <path d="M15.33,2v20" />
      </svg>
    );
  },
);

export default Columns3;
