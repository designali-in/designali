import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Parentheses = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8 21s-4-3-4-9 4-9 4-9" />
        <path d="M16 3s4 3 4 9-4 9-4 9" />
      </svg>
    );
  },
);

export default Parentheses;
