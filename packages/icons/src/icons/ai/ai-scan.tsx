import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiScan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="5.5" y="8.32" width="13" height="8.35" rx="2" ry="2" />
        <line x1="12" y1="8.32" x2="12" y2="6.21" />
        <line x1="9.89" y1="11.47" x2="9.89" y2="12" />
        <line x1="14.11" y1="11.47" x2="14.11" y2="12" />
        <path fill="none" d="M2,6.44v-2.22c0-1.23.99-2.22,2.22-2.22h2.22" />
        <path fill="none" d="M17.56,2h2.22c1.23,0,2.22.99,2.22,2.22v2.22" />
        <path fill="none" d="M22,17.56v2.22c0,1.23-.99,2.22-2.22,2.22h-2.22" />
        <path fill="none" d="M6.44,22h-2.22c-1.23,0-2.22-.99-2.22-2.22v-2.22" />
      </svg>
    );
  },
);

export default AiScan;
