import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Newspaper = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4,22h16c1.1,0,2-.9,2-2V4c0-1.1-.9-2-2-2h-12c-1.1,0-2,.9-2,2v16c0,1.1-.9,2-2,2ZM4,22c-1.1,0-2-.9-2-2v-9c0-1.1.9-2,2-2h2" />
        <path d="M18,14h-8" />
        <path d="M15,18h-5" />
        <path d="M10,6h8v4h-8v-4Z" />
      </svg>
    );
  },
);

export default Newspaper;
