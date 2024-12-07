import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserLove01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21.21,20.2c.39-.38.79-.83.79-1.41,0-.78-.64-1.41-1.44-1.41-.46,0-.79.13-1.18.51-.39-.39-.72-.51-1.18-.51-.79,0-1.44.63-1.44,1.41,0,.59.39,1.04.79,1.41l1.83,1.8,1.83-1.8Z" />

        <path
          fill="none"
          d="M13.11,15.33h-6.67c-2.45,0-4.44,1.99-4.44,4.44v2.22"
        />
        <circle cx="9.78" cy="6.44" r="4.44" />
      </svg>
    );
  },
);

export default UserLove01;
