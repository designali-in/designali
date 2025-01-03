import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Briefcase = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,21V5c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v16" />
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      </svg>
    );
  },
);

export default Briefcase;
