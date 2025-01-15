import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookKey = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19,3l1,1" />
        <path d="M20,2l-4.5,4.5" />
        <path d="M20,8v13c0,.55-.45,1-1,1H6.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5h13.5" />
        <path d="M4,19.5V4.5c0-1.38,1.12-2.5,2.5-2.5h7.5" />
        <circle cx="14" cy="8" r="2" />
      </svg>
    );
  },
);

export default BookKey;
