import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ListCollapse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 10 2.5-2.5L3 5" />
        <path d="m3 19 2.5-2.5L3 14" />
        <path d="M10 6h11" />
        <path d="M10 12h11" />
        <path d="M10 18h11" />
      </svg>
    );
  },
);

export default ListCollapse;
