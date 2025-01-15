import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Award04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,17l5,5,5-5" />
        <path d="M9.43,3.06c1.26-.71,1.89-1.06,2.57-1.06s1.32.35,2.57,1.06l1.75.99c1.31.74,1.96,1.1,2.32,1.72.36.61.36,1.36.36,2.86v1.74c0,1.5,0,2.25-.36,2.87-.36.61-1.01.98-2.32,1.72l-1.75.99c-1.26.71-1.89,1.06-2.57,1.06s-1.32-.35-2.57-1.06l-1.75-.99c-1.31-.74-1.96-1.1-2.32-1.72-.36-.62-.36-1.37-.36-2.87v-1.74c0-1.5,0-2.25.36-2.86.36-.61,1.01-.98,2.32-1.72l1.75-.99Z" />
        <path d="M9,10.17s.75,0,1.5,1.33c0,0,2.38-3.33,4.5-4" />
        <path d="M16.88,15l.67,3.21c.43,2.06.65,3.09.2,3.58-.44.49-1.21.07-2.75-.77l-2.27-1.24c-.36-.2-.54-.3-.74-.3s-.37.1-.74.3l-2.27,1.24c-1.54.84-2.3,1.26-2.75.77-.44-.49-.23-1.52.2-3.58l.67-3.21" />
      </svg>
    );
  },
);

export default Award04;
