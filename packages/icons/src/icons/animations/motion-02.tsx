import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Motion02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M8.51,15c-.49-.05-.85-.14-1.16-.32-.41-.24-.76-.58-.99-.99-.36-.63-.36-1.48-.36-3.17s0-2.54.36-3.17c.24-.41.58-.76.99-.99.63-.36,1.48-.36,3.17-.36s2.54,0,3.17.36c.41.24.76.58.99.99.18.31.27.67.32,1.16"
        />
        <path
          fill="none"
          d="M3.42,9c-.48-.14-.88-.5-1.13-.93-.29-.5-.29-1.16-.29-2.5s0-2,.29-2.5c.19-.33.46-.6.79-.78.5-.29,1.17-.29,2.51-.29s2.01,0,2.51.29c.4.23.75.6.91,1.04"
        />
        <rect
          x="11.07"
          y="11.06"
          width="10.93"
          height="10.93"
          rx="3.13"
          ry="3.13"
        />
      </svg>
    );
  },
);

export default Motion02;
