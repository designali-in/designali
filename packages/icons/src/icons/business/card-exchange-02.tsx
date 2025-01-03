import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CardExchange02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="13.08" width="10.7" height="8.92" rx="2.38" ry="2.38" />
        <line x1="2" y1="16.61" x2="11.97" y2="16.61" />
        <rect
          x="11.3"
          y="1.99"
          width="10.7"
          height="8.92"
          rx="2.38"
          ry="2.38"
        />
        <line x1="11.3" y1="5.51" x2="21.27" y2="5.51" />
        <path d="M2,9c0-3.32,2.68-6,6-6l-.86,1.71" />
        <path d="M22,15c0,3.32-2.68,6-6,6l.86-1.71" />
      </svg>
    );
  },
);

export default CardExchange02;
