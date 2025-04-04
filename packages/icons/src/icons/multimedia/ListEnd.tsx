import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ListEnd = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16 12H3" />
        <path d="M16 6H3" />
        <path d="M10 18H3" />
        <path d="M21 6v10a2 2 0 0 1-2 2h-5" />
        <path d="m16 16-2 2 2 2" />
      </svg>
    );
  },
);

export default ListEnd;
