import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ListTree = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21 12h-8" />
        <path d="M21 6H8" />
        <path d="M21 18h-8" />
        <path d="M3 6v4c0 1.1.9 2 2 2h3" />
        <path d="M3 10v6c0 1.1.9 2 2 2h3" />
      </svg>
    );
  },
);

export default ListTree;
