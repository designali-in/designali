import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ListCheck = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11 18H3" />
        <path d="m15 18 2 2 4-4" />
        <path d="M16 12H3" />
        <path d="M16 6H3" />
      </svg>
    );
  },
);

export default ListCheck;
