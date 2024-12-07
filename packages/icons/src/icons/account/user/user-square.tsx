import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserSquare = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="2" width="20" height="20" rx="2.22" ry="2.22" />
        <circle cx="12" cy="9.78" r="3.33" />
        <path
          fill="none"
          d="M6.44,22v-2.22c0-1.23.99-2.22,2.22-2.22h6.67c1.23,0,2.22.99,2.22,2.22v2.22"
        />
      </svg>
    );
  },
);

export default UserSquare;
