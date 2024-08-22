import * as React from "react";

import { DesignaliProps } from "../../types";

export const UserSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="10" cy="7" r="4" />
        <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
        <circle cx="17" cy="17" r="3" />
        <path d="m21 21-1.9-1.9" />
      </svg>
    );
  },
);

export default UserSearch;
