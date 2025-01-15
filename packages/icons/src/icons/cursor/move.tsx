import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Move = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15,19l-3,3-3-3" />
        <path d="M19,9l3,3-3,3" />
        <path d="M2,12h20" />
        <path d="M5,9l-3,3,3,3" />
        <path d="M9,5l3-3,3,3" />
      </svg>
    );
  },
);

export default Move;
