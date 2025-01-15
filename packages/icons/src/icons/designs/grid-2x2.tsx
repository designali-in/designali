import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Grid2x2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2v20" />
        <path d="M2,12h20" />
        <rect x="2" y="2" width="20" height="20" rx="2.22" ry="2.22" />
      </svg>
    );
  },
);

export default Grid2x2;
