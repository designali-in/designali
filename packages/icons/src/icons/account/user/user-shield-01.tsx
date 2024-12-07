import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserShield01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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

        <path d="M22,18.83c0,1.76-1.23,2.64-2.7,3.16-.08.03-.16.02-.24,0-1.47-.51-2.7-1.39-2.7-3.15v-2.47c0-.19.16-.35.35-.35.71,0,1.59-.42,2.2-.96.15-.13.38-.13.54,0,.62.54,1.5.96,2.2.96.19,0,.35.16.35.35v2.47Z" />
      </svg>
    );
  },
);

export default UserShield01;
