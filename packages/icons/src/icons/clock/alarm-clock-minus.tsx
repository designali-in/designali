import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AlarmClockMinus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="13" r="8" />
        <path d="M5,3l-3,3" />
        <path d="M22,6l-3-3" />
        <path d="M6.38,18.7l-2.38,2.3" />
        <path d="M17.64,18.67l2.36,2.33" />
        <path d="M9,13h6" />
      </svg>
    );
  },
);

export default AlarmClockMinus;
