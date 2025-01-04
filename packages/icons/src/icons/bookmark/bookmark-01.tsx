import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bookmark01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19.78,22l-7.78-4.44-7.78,4.44V4.22c0-1.23.99-2.22,2.22-2.22h11.11c1.23,0,2.22.99,2.22,2.22v17.78Z" />
      </svg>
    );
  },
);

export default Bookmark01;
