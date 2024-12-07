import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserMinus02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M22,12h-6" />

        <path
          fill="none"
          d="M17.56,22v-2.22c0-2.45-1.99-4.44-4.44-4.44h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserMinus02;
