import * as React from "react";

import type { DesignaliProps } from "../../types";

export const GitBranchPlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6 3v12" />
        <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path d="M15 6a9 9 0 0 0-9 9" />
        <path d="M18 15v6" />
        <path d="M21 18h-6" />
      </svg>
    );
  },
);

export default GitBranchPlus;
