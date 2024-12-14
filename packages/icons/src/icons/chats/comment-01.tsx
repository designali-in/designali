import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Comment01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.21,19.9c4.65,2.39,10.36.55,12.75-4.1,2.39-4.65.55-10.36-4.1-12.75C12.2.66,6.49,2.5,4.1,7.15c-1.39,2.71-1.39,5.93,0,8.64l-2.1,6.21,6.21-2.1Z" />

        <line x1="8.31" y1="12.91" x2="16.31" y2="12.91" />
        <line x1="12.31" y1="9.09" x2="16.31" y2="9.09" />
      </svg>
    );
  },
);

export default Comment01;
