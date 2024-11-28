import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Accessibility = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="16" cy="4" r="1" />
        <path fill="none" d="m18 19 1-7-6 1" />
        <path fill="none" d="m5 8 3-3 5.5 3-2.36 3.5" />
        <path fill="none" d="M4.24 14.5a5 5 0 0 0 6.88 6" />
        <path fill="none" d="M13.76 17.5a5 5 0 0 0-6.88-6" />
      </svg>
    );
  },
);

export default Accessibility;
