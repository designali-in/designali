import * as React from "react";

import type { DesignaliProps } from "../../types";

export const IceCreamCone = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
        <path d="M17 7A5 5 0 0 0 7 7" />
        <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
      </svg>
    );
  },
);

export default IceCreamCone;
