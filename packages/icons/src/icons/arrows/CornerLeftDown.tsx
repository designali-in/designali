import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CornerLeftDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="14 15 9 20 4 15" />
        <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
      </svg>
    );
  },
);

export default CornerLeftDown;
