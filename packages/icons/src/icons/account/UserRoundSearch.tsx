import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UserRoundSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="10" cy="8" r="5" />
        <path d="M2 21a8 8 0 0 1 10.434-7.62" />
        <circle cx="18" cy="18" r="3" />
        <path d="m22 22-1.9-1.9" />
      </svg>
    );
  },
);

export default UserRoundSearch;
