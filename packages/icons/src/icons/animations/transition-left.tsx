import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TransitionLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.69,8.76l-3.24,3.24,3.24,3.24" />
        <path d="M14,12H5.45" />

        <rect
          x="7.99"
          y="7.99"
          width="20"
          height="8.01"
          rx="1.43"
          ry="1.43"
          transform="translate(5.99 29.99) rotate(-90)"
        />
        <path
          fill="none"
          d="M8.59,22H3.43c-.79,0-1.43-.64-1.43-1.43V3.43c0-.79.64-1.43,1.43-1.43h5.16"
        />
      </svg>
    );
  },
);

export default TransitionLeft;
