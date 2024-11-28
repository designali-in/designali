import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareKanban = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 7v7" />
        <path d="M12 7v4" />
        <path d="M16 7v9" />
      </svg>
    );
  },
);

export default SquareKanban;
