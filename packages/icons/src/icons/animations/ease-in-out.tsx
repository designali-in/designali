import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseInOut = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M21.96,3.15C10.95,3.15,13.05,20.85,2.04,20.85" />
      </svg>
    );
  },
);

export default EaseInOut;
