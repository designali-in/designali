import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6,22V3.2c0-.78.47-1.2,1.2-1.2,1.67,0,2.51,0,3.21.11,3.85.61,6.87,3.63,7.48,7.48.11.7.11,1.54.11,3.21v9.2" />
        <line x1="13.43" y1="9.51" x2="17.43" y2="9.51" />
        <line x1="13.43" y1="13.18" x2="18" y2="13.18" />
        <line x1="13.43" y1="16.85" x2="18" y2="16.85" />
        <line x1="3.23" y1="22" x2="20.77" y2="22" />
      </svg>
    );
  },
);

export default Building01;
