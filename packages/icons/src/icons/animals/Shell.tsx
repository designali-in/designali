import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Shell = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14,11.05c0,1.1-.9,2-2,2s-2-.9-2-2c0-2.21,1.79-4,4-4s4,1.79,4,4c0,3.31-2.69,6-6,6s-6-2.69-6-6c0-4.42,3.58-8,8-8s8,3.58,8,8c0,5.52-4.48,10-10,10S2,16.57,2,11.05c0-2.61.85-5.14,2.42-7.22.62-.91,1.86-1.15,2.78-.53.91.62,1.15,1.86.53,2.78-.05.07-.1.13-.15.2" />
      </svg>
    );
  },
);

export default Shell;
