import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Link = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9.99,13.01c1.66,2.22,4.81,2.68,7.04,1.01.19-.14.37-.3.54-.47l3.02-3.02c1.93-2,1.87-5.18-.12-7.11-1.95-1.88-5.04-1.88-6.99,0l-1.73,1.72" />
        <path d="M14.01,10.99c-1.66-2.22-4.81-2.68-7.04-1.01-.19.14-.37.3-.54.47l-3.02,3.02c-1.93,2-1.87,5.18.12,7.11,1.95,1.88,5.04,1.88,6.99,0l1.72-1.72" />
      </svg>
    );
  },
);

export default Link;
