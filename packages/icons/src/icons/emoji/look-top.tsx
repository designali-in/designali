import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LookTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,11c.58.32,1.26.5,2,.5s1.42-.18,2-.5" />
        <circle cx="12" cy="12" r="10" />
        <line x1="9" y1="7" x2="9.01" y2="7" />
        <line x1="15" y1="7" x2="15.01" y2="7" />
      </svg>
    );
  },
);

export default LookTop;
