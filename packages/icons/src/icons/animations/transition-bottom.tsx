import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TransitionBottom = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M8.76,15.31l3.24,3.24,3.24-3.24" />
        <path d="M12,10v8.55" />

        <rect x="2" y="1.99" width="20" height="8.01" rx="1.43" ry="1.43" />
        <path
          fill="none"
          d="M22,15.41v5.16c0,.79-.64,1.43-1.43,1.43H3.43c-.79,0-1.43-.64-1.43-1.43v-5.16"
        />
      </svg>
    );
  },
);

export default TransitionBottom;
