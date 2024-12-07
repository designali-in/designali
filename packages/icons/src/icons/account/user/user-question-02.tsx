import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserQuestion02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M17.56,22v-2.22c0-2.45-1.99-4.44-4.44-4.44h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />

        <path
          fill="none"
          d="M17.77,8.95c.41-1.13,1.66-1.71,2.79-1.3.86.31,1.43,1.12,1.43,2.03,0,1.45-2.18,2.18-2.18,2.18"
        />
        <path d="M19.88,14.76h0" />
      </svg>
    );
  },
);

export default UserQuestion02;
