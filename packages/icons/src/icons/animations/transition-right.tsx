import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TransitionRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.3,15.24l3.24-3.24-3.24-3.24" />
        <path d="M9.99,12h8.55" />
        <rect
          x="-3.99"
          y="7.98"
          width="20"
          height="8.01"
          rx="1.43"
          ry="1.43"
          transform="translate(-5.98 17.99) rotate(-90)"
        />
        <path
          fill="none"
          d="M15.41,1.99h5.16c.79,0,1.43.64,1.43,1.43v17.15c0,.79-.64,1.43-1.43,1.43h-5.16"
        />
      </svg>
    );
  },
);

export default TransitionRight;
