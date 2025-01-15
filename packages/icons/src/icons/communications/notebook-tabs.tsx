import * as React from "react";

import type { DesignaliProps } from "../../types";

export const NotebookTabs = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3,6h4" />
        <path d="M3,10h4" />
        <path d="M3,14h4" />
        <path d="M3,18h4" />
        <rect x="5" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M16,2v20" />
        <path d="M16,7h5" />
        <path d="M16,12h5" />
        <path d="M16,17h5" />
      </svg>
    );
  },
);

export default NotebookTabs;
