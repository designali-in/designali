import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dice2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M15 9h.01" />
        <path d="M9 15h.01" />
      </svg>
    );
  },
);

export default Dice2;
