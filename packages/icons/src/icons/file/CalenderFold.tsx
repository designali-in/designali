import * as React from "react";

import { DesignaliProps } from "../../types";

export const CalenderFold = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" />
        <path d="M3 10h18" />
        <path d="M15 22v-4a2 2 0 0 1 2-2h4" />
      </svg>
    );
  },
);

export default CalenderFold;
