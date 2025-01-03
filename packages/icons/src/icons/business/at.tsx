import * as React from "react";

import type { DesignaliProps } from "../../types";

export const At = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="4" />
        <path d="M16,8v5c0,1.66,1.34,3,3,3s3-1.34,3-3v-1c0-5.52-4.48-10-10-10S2,6.48,2,12s4.48,10,10,10c2.16,0,4.27-.7,6-2" />
      </svg>
    );
  },
);

export default At;
