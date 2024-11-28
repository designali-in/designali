import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Eclipse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path fill="none" d="M12 2a7 7 0 1 0 10 10" />
      </svg>
    );
  },
);

export default Eclipse;
