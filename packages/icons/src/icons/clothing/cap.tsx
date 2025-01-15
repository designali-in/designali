import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cap = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.5,17l-.44-2.47C1.42,8.64,6.06,3.5,12,3.5s10.58,5.14,9.94,11.03l-.44,2.47" />
        <path d="M8.02,10.5c-.2-3.2,1.58-7,3.98-7" />
        <path d="M16,10.5c.2-3.2-1.58-7-3.98-7" />
        <path d="M2.5,17.01c8-2.87,11-2.49,19,0-.28,1.12-.43,4.29-1.65,4.89-.59.29-1.43-.1-2.03-.24-2.9-.69-4.34-1.04-5.82-1.04s-2.93.35-5.82,1.04c-.6.14-1.44.53-2.03.24-1.22-.6-1.37-3.77-1.65-4.89Z" />
        <line x1="12" y1="2" x2="12" y2="3.5" />
      </svg>
    );
  },
);

export default Cap;
