import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserAccount = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="12.77" y1="5.52" x2="18.45" y2="5.52" />
        <line x1="18.45" y1="9.29" x2="15.45" y2="9.29" />

        <path
          fill="none"
          d="M13.17,18.26v-1.06c0-1.17-.95-2.12-2.12-2.12h-3.19c-1.17,0-2.12.95-2.12,2.12v1.06"
        />
        <circle cx="9.46" cy="10.82" r="2.12" />
      </svg>
    );
  },
);

export default UserAccount;
