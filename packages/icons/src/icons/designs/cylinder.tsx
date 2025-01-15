import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cylinder = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3,5v14c0,1.66,4.03,3,9,3s9-1.34,9-3V5" />
      </svg>
    );
  },
);

export default Cylinder;
