import * as React from "react";

import type { DesignaliProps } from "../../types";

export const RussianRubie = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
        <path d="M6 15h8" />
      </svg>
    );
  },
);

export default RussianRubie;
