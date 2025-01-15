import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Eclipse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12,2c-2.76,2.76-2.76,7.24,0,10s7.24,2.76,10,0" />
      </svg>
    );
  },
);

export default Eclipse;
