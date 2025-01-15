import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Brush = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M9.04,11.41L17.11,3.35c1.1-1.13,2.9-1.16,4.03-.06,1.13,1.1,1.16,2.9.06,4.03-.02.02-.04.04-.06.06l-8.06,8.08" />
        <path d="M7.05,14.45c-1.66,0-3,1.35-3,3.02,0,1.33-2.5,1.52-2,2.02,1.08,1.1,2.49,2.02,4,2.02,2.2,0,4-1.8,4-4.04,0-1.66-1.34-3.01-3-3.02,0,0,0,0,0,0Z" />
      </svg>
    );
  },
);

export default Brush;
