import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Anvil = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
        <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
        <path d="M9 12v5" />
        <path d="M15 12v5" />
        <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
      </svg>
    );
  },
);

export default Anvil;
