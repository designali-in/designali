import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MailOpen = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20.52,8.01c1.48,0,1.48,1.36,1.48,1.99v10c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-10c0-.63,0-2.17,1.53-2.17" />
        <path d="M22,10l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,10" />
        <path d="M3.53,10.97V3.89c0-1.04.84-1.89,1.89-1.89h13.22c1.04,0,1.89.84,1.89,1.89v7.06" />
        <line x1="9.29" y1="5.54" x2="14.71" y2="5.54" />
        <line x1="7.61" y1="9" x2="16.39" y2="9" />
      </svg>
    );
  },
);

export default MailOpen;
