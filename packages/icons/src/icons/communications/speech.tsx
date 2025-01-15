import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Speech = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8.8,20.58v-4.1l1.9.2c1.14-.06,2.07-.96,2.16-2.1v-5.7c.01-3-2.41-5.44-5.41-5.46-3-.01-5.44,2.41-5.46,5.41,0,2.8.66,3.05,1,4.55.23.9.24,1.85.03,2.76l-1.03,4.44" />
        <path d="M19.8,18.38c2.93-2.93,2.93-7.67,0-10.6" />
        <path d="M17,15.58c1.37-1.37,1.37-3.58,0-4.95,0,0-.02-.02-.03-.03" />
      </svg>
    );
  },
);

export default Speech;
