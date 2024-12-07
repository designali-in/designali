import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserSwitch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="5.28" cy="3.97" r="1.97" />
        <path
          fill="none"
          d="M2,10.95v-1.09c0-.72.59-1.31,1.31-1.31h3.93c.72,0,1.31.59,1.31,1.31v1.09"
        />

        <circle cx="18.72" cy="15.01" r="1.97" />
        <path
          fill="none"
          d="M15.45,22v-1.09c0-.72.59-1.31,1.31-1.31h3.93c.72,0,1.31.59,1.31,1.31v1.09"
        />

        <path fill="none" d="M4,15c0,3.32,2.68,6,6,6l-.86-1.71" />
        <path fill="none" d="M20,9c0-3.32-2.68-6-6-6l.86,1.71" />
      </svg>
    );
  },
);

export default UserSwitch;
