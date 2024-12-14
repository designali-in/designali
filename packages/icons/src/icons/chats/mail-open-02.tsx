import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MailOpen02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="6" y="3.5" width="16" height="13" rx="2" ry="2" />
        <path d="M22,6.5l-7.1,3.78c-.57.3-1.23.3-1.8,0l-7.1-3.78" />
        <path fill="none" d="M2,7.5v11c0,1.1.9,2,2,2h14" />
      </svg>
    );
  },
);

export default MailOpen02;
