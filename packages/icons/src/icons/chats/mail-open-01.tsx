import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MailOpen01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <path d="M22,9l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,9" />
      </svg>
    );
  },
);

export default MailOpen01;
