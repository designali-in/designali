import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Tickets = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" />
        <path d="M6 10V8" />
        <path d="M6 14v1" />
        <path d="M6 19v2" />
        <rect x="2" y="8" width="20" height="13" rx="2" />
      </svg>
    );
  },
);

export default Tickets;
