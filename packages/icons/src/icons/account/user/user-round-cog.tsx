import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserRoundCog = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M2,20.78c0-4.49,3.64-8.12,8.12-8.12.84,0,1.67.13,2.47.39"
        />
        <circle cx="10.12" cy="7.58" r="5.08" />
        <circle cx="18.24" cy="17.74" r="3.05" />
        <path d="M19.77,13.98l-.41.91" />
        <path d="M17.13,20.58l-.41.91" />
        <path d="M22,19.26l-.91-.41" />
        <path d="M15.4,16.62l-.91-.41" />
        <path d="M22,16.21l-.91.41" />
        <path d="M15.4,18.85l-.91.41" />
        <path d="M19.77,21.49l-.41-.91" />
        <path d="M17.13,14.89l-.41-.91" />
      </svg>
    );
  },
);

export default UserRoundCog;
