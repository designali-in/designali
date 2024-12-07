import * as React from "react";

import type { DesignaliProps } from "../../../types";

export const UserRoundMinus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M2,21c0-4.42,3.58-8,8-8,1.95,0,3.83.71,5.29,2" />
        <circle cx="10" cy="8" r="5" />
        <path d="M22,19h-6" />
      </svg>
    );
  },
);

export default UserRoundMinus;
