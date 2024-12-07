import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserSharing = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M2,12.07C2,6.51,6.51,2,12.07,2s10.07,4.51,10.07,10.07"
        />
        <path
          fill="none"
          d="M5.52,12.07c0-3.62,2.93-6.55,6.55-6.55s6.55,2.93,6.55,6.55"
        />

        <path
          fill="none"
          d="M17,22v-1.43c0-1.58-1.28-2.86-2.86-2.86h-4.29c-1.58,0-2.86,1.28-2.86,2.86v1.43"
        />
        <circle cx="12" cy="12" r="2.86" />
      </svg>
    );
  },
);

export default UserSharing;
