import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cable = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17,21v-2c-.55,0-1-.45-1-1v-1c0-1.1.9-2,2-2h2c1.1,0,2,.9,2,2v1c0,.55-.45,1-1,1" />
        <path d="M19,15V6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v11c0,1.93-1.57,3.5-3.5,3.5s-3.5-1.57-3.5-3.5v-8.5" />
        <path d="M21,21v-2h-4" />
        <path d="M3,5h4v-2" />
        <path d="M7,5c.55,0,1,.45,1,1v1c0,1.1-.9,2-2,2h-2c-1.1,0-2-.9-2-2v-1c0-.55.45-1,1-1v-2" />
      </svg>
    );
  },
);

export default Cable;
