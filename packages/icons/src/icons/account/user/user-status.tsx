import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserStatus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="10" r="3" />
        <circle cx="20.68" cy="19.32" r="1.32" />
        <path
          fill="none"
          d="M7,20.66v-1.66c0-1.1.9-2,2-2h6c1.1,0,2,.9,2,2v1.66"
        />
        <path
          fill="none"
          d="M12,22c-5.52,0-10-4.48-10-10S6.48,2,12,2s10,4.48,10,10"
        />
      </svg>
    );
  },
);

export default UserStatus;
