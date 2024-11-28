import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoveDownLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11 19H5V13" />
        <path d="M19 5L5 19" />
      </svg>
    );
  },
);

export default MoveDownLeft;
