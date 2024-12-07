import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserLock02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />

        <rect x="16.84" y="17.92" width="5.16" height="4.08" rx=".6" ry=".6" />
        <path d="M18.04,17.92v-1.67c0-.33.27-.6.6-.6h1.56c.33,0,.6.27.6.6v1.67" />
      </svg>
    );
  },
);

export default UserLock02;
