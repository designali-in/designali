import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileScan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M16 14a2 2 0 0 0-2 2" />
        <path d="M20 14a2 2 0 0 1 2 2" />
        <path d="M20 22a2 2 0 0 0 2-2" />
        <path d="M16 22a2 2 0 0 1-2-2" />
      </svg>
    );
  },
);

export default FileScan;
