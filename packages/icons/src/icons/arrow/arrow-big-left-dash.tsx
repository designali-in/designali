import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigLeftDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M16.29,16.29h-4.29v5.71L2,12,12,2v5.71h4.29v8.57Z"/>
  <line  x1="22" y1="7.71" x2="22" y2="16.29"/>
</svg>
    );
  },
);

export default ArrowBigLeftDash;
