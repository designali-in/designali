import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserGroup01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          d="M16.9,22.09v-1.4c0-1.55-1.25-2.8-2.8-2.8h-4.2c-1.55,0-2.8,1.25-2.8,2.8v1.4"
        />
        <circle cx="12" cy="12.3" r="2.8" />

        <path
          fill="none"
          d="M22,15.79v-1.32c0-1.46-1.18-2.64-2.64-2.64h-3.97"
        />
        <circle cx="17.37" cy="6.54" r="2.64" />

        <path
          fill="none"
          d="M8.61,11.83h-3.97c-1.46,0-2.64,1.18-2.64,2.64v1.32"
        />
        <circle cx="6.63" cy="6.54" r="2.64" />
      </svg>
    );
  },
);

export default UserGroup01;
