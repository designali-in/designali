import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MessageSquareWarning = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M22,15.33c0,1.23-.99,2.22-2.22,2.22H6.44l-4.44,4.44V4.22c0-1.23.99-2.22,2.22-2.22h15.56c1.23,0,2.22.99,2.22,2.22v11.11Z"/>
  <g>
    <line  x1="12" y1="6.37" x2="12" y2="10.02"/>
    <circle  cx="12" cy="13.48" r=".15"/>
  </g>
</svg>
    );
  },
);

export default MessageSquareWarning;
