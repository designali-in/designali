import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserCheck02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.07,19.02l2.98,2.98,5.95-5.95" />

        <path
          fill="none"
          d="M16.11,16.5c-.79-.72-1.84-1.16-3-1.16h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserCheck02;
