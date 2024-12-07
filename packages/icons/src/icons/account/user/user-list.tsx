import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserList = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="16.81" y1="15.33" x2="22" y2="15.33" />
        <line x1="18.85" y1="18.67" x2="22" y2="18.67" />
        <line x1="15.4" y1="22" x2="22" y2="22" />

        <path
          fill="none"
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserList;
