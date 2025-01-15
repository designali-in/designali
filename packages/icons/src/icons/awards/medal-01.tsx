import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.5,2v8.5M15.5,2v8.5" />
        <path d="M17.92,2.01H6.08c-.91,0-2.12-.16-2.74.68-.34.46-.34,1.14-.34,2.48,0,1.15,0,1.72.23,2.2.4.83,1.28,1.18,2.04,1.57l3.71,1.9c1.48.76,2.22,1.14,3.02,1.14s1.54-.38,3.02-1.14l3.71-1.9c.76-.39,1.64-.75,2.04-1.57.23-.48.23-1.06.23-2.2,0-1.35,0-2.02-.34-2.48-.62-.84-1.83-.68-2.74-.68Z" />
        <path d="M10.53,13.64c.72-.43,1.08-.64,1.47-.64s.75.21,1.47.64l1,.59c.75.44,1.12.66,1.32,1.03.21.37.21.82.21,1.72v1.04c0,.9,0,1.35-.21,1.72-.21.37-.58.59-1.32,1.03l-1,.59c-.72.43-1.08.64-1.47.64s-.75-.21-1.47-.64l-1-.59c-.75-.44-1.12-.66-1.32-1.03-.21-.37-.21-.82-.21-1.72v-1.04c0-.9,0-1.35.21-1.72.21-.37.58-.59,1.32-1.03l1-.59Z" />
      </svg>
    );
  },
);

export default Medal01;
