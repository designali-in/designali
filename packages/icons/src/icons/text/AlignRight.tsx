import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AlignRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21 12H9" />
        <path d="M21 18H7" />
        <path d="M21 6H3" />
      </svg>
    );
  },
);

export default AlignRight;
