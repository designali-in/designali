import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UserRoundX = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 21a8 8 0 0 1 11.873-7" />
        <circle cx="10" cy="8" r="5" />
        <path d="m17 17 5 5" />
        <path d="m22 17-5 5" />
      </svg>
    );
  },
);

export default UserRoundX;
