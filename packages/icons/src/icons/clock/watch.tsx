import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Watch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12.01" r="6" />
        <polyline points="12 10.01 12 12.01 13 13.01" />
        <path d="M16.13,7.67l-.81-4.05c-.19-.95-1.03-1.63-2-1.61h-2.68c-.97-.02-1.81.66-2,1.61l-.78,4.05" />
        <path d="M7.88,16.38l.8,4c.19.95,1.03,1.63,2,1.61h2.72c.97.02,1.81-.66,2-1.61l.81-4.05" />
      </svg>
    );
  },
);

export default Watch;
