import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserCircle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path
          fill="none"
          d="M7,20.66v-1.66c0-1.1.9-2,2-2h6c1.1,0,2,.9,2,2v1.66"
        />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  },
);

export default UserCircle;
