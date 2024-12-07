import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserBlock01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="18.06" cy="18.06" r="3.94" />
        <line x1="15.58" y1="21.12" x2="20.53" y2="14.99" />

        <path
          fill="none"
          d="M9.95,15.33h-3.04c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="10.24" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserBlock01;
