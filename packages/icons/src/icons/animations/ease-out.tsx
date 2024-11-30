import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EaseOut = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M2.03,20.86S9.78,3.14,21.97,3.14" />
      </svg>
    );
  },
);

export default EaseOut;
