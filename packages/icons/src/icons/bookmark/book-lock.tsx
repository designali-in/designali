import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,6v-2c0-1.1-.9-2-2-2s-2,.9-2,2v2" />
        <path d="M20,15v6c0,.55-.45,1-1,1H6.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5h13.5" />
        <path d="M4,19.5V4.5c0-1.38,1.12-2.5,2.5-2.5h3.5" />
        <rect x="12" y="6" width="8" height="5" rx="1" ry="1" />
      </svg>
    );
  },
);

export default BookLock;
