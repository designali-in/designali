import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownToLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,17.56V2" />
        <path d="M5.33,10.89l6.67,6.67,6.67-6.67" />
        <path d="M19.78,22H4.22" />
      </svg>
    );
  },
);

export default ArrowDownToLine;
