import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookText = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4,19.5V4.5c0-1.38,1.12-2.5,2.5-2.5h12.5c.55,0,1,.45,1,1v18c0,.55-.45,1-1,1H6.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5h13.5" />
        <path d="M8,11h8" />
        <path d="M8,7h6" />
      </svg>
    );
  },
);

export default BookText;
