import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.65,8.66l-6.66-6.66-6.66,6.66" />
        <path d="M11.99,2v15.53" />
        <path d="M4.22,21.97h15.53" />
      </svg>
    );
  },
);

export default ArrowUpFromLine;
