import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AlignEndVertical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="16" height="6" x="2" y="4" rx="2" />
        <rect width="9" height="6" x="9" y="14" rx="2" />
        <path d="M22 22V2" />
      </svg>
    );
  },
);

export default AlignEndVertical;
