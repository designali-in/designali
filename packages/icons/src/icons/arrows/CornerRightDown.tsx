import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CornerRightDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <polyline points="10 15 15 20 20 15" />
        <path d="M4 4h7a4 4 0 0 1 4 4v12" />
      </svg>
    );
  },
);

export default CornerRightDown;
