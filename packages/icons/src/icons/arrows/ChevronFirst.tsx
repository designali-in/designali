import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChevronFirst = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m17 18-6-6 6-6" />
        <path d="M7 6v12" />
      </svg>
    );
  },
);

export default ChevronFirst;
