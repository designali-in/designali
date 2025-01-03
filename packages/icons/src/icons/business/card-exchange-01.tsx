import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CardExchange01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,9c0-3.32,2.68-6,6-6l-.86,1.71" />
        <path d="M22,15c0,3.32-2.68,6-6,6l.86-1.71" />
        <rect x="2" y="12" width="12" height="10" rx="2.38" ry="2.38" />
        <line x1="2" y1="15.53" x2="13.97" y2="15.53" />
        <path d="M10,8.95v-4.57c0-1.31,1.06-2.38,2.38-2.38h7.25c1.31,0,2.38,1.06,2.38,2.38v5.25c0,1.31-1.06,2.38-2.38,2.38h-2.88" />
        <line x1="10" y1="5.53" x2="21.97" y2="5.53" />
      </svg>
    );
  },
);

export default CardExchange01;
