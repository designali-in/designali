import * as React from "react";

import type { DesignaliProps } from "../../types";

export const StarOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" />
        <path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" />
        <line x1="2" x2="22" y1="2" y2="22" />
      </svg>
    );
  },
);

export default StarOff;
