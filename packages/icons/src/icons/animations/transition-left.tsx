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
        <path fill="none" d="M8.69,8.76l-3.24,3.24,3.24,3.24" />
        <path d="M14,12H5.45" />

        <path
          fill="none"
          d="M8,22c-2.34,0-3.51,0-4.36-.54-.45-.28-.82-.66-1.1-1.1-.54-.85-.54-2.02-.54-4.36v-8c0-2.34,0-3.51.54-4.36.28-.45.66-.82,1.1-1.1.85-.54,2.02-.54,4.36-.54"
        />
        <rect
          x="7.99"
          y="7.99"
          width="20"
          height="8.01"
          rx="1.43"
          ry="1.43"
          transform="translate(5.99 29.99) rotate(-90)"
        />
      </svg>
    );
  },
);

export default TransitionLeft;
