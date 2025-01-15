import * as React from "react";

import type { DesignaliProps } from "../../types";

export const History = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,12c0,5.52,4.48,10,10,10s10-4.48,10-10S17.52,2,12,2c-2.8.01-5.48,1.1-7.49,3.04l-2.51,2.51" />
        <path d="M2,2v5.56h5.56" />
        <path d="M12,6.44v5.56l4.44,2.22" />
      </svg>
    );
  },
);

export default History;
