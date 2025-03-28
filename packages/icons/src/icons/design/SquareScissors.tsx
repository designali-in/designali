import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareScissors = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="20" height="20" x="2" y="2" rx="2" />
        <circle cx="8" cy="8" r="2" />
        <path d="M9.414 9.414 12 12" />
        <path d="M14.8 14.8 18 18" />
        <circle cx="8" cy="16" r="2" />
        <path d="m18 6-8.586 8.586" />
      </svg>
    );
  },
);

export default SquareScissors;
