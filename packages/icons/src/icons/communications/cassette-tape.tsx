import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CassetteTape = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <circle cx="8" cy="10" r="2" />
        <path d="M8,12h8" />
        <circle cx="16" cy="10" r="2" />
        <path d="M6,20l.7-2.9c.14-.65.73-1.12,1.4-1.1h7.8c.64-.03,1.22.39,1.4,1l.7,3" />
      </svg>
    );
  },
);

export default CassetteTape;
