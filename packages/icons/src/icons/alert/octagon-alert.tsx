import * as React from "react";

import type { DesignaliProps } from "../../types";

export const OctagonAlert = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.85,1.99h-5.7c-.83,0-1.63.33-2.21.92L2.91,6.94c-.59.59-.92,1.38-.92,2.21v5.7c0,.83.33,1.63.92,2.21l4.03,4.03c.59.59,1.38.92,2.21.92h5.7c.83,0,1.63-.33,2.21-.92l4.03-4.03c.59-.59.92-1.38.92-2.21v-5.7c0-.83-.33-1.63-.92-2.21l-4.03-4.03c-.59-.59-1.38-.92-2.21-.92Z" />
        <line x1="12" y1="8.37" x2="12" y2="12.02" />
        <circle cx="12" cy="15.48" r=".15" />
      </svg>
    );
  },
);

export default OctagonAlert;
