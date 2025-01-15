import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LookRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
  <path  d="M21.5,14.5c-.84.31-1.37.5-2.5.5-1.64,0-3.09-.39-4-1"/>
  <circle  cx="12" cy="12" r="10"/>
  <line  x1="17" y1="9" x2="16.99" y2="9"/>
</svg>
    );
  },
);

export default LookRight;
