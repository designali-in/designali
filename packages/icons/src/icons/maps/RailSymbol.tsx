import * as React from "react";

import type { DesignaliProps } from "../../types";

export const RailSymbol = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5 15h14" />
        <path d="M5 9h14" />
        <path d="m14 20-5-5 6-6-5-5" />
      </svg>
    );
  },
);

export default RailSymbol;
