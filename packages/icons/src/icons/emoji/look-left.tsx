import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LookLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M9,14c-.91.61-2.36,1-4,1-1.13,0-1.66-.19-2.5-.5"/>
  <circle  cx="12" cy="12" r="10"/>
  <line  x1="7" y1="9" x2="7.01" y2="9"/>
</svg>
    );
  },
);

export default LookLeft;
