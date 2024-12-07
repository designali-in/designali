import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserRound = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M18,20c0-3.31-2.69-6-6-6s-6,2.69-6,6" />
        <circle cx="12" cy="10" r="4" />
      </svg>
    );
  },
);

export default UserRound;
