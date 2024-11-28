import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoveDownRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19 13V19H13" />
        <path d="M5 5L19 19" />
      </svg>
    );
  },
);

export default MoveDownRight;
