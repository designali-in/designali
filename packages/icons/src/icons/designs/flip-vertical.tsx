import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FlipVertical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21,8v-3c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v3" />
        <path d="M21,16v3c0,1.1-.9,2-2,2H5c-1.1,0-2-.9-2-2v-3" />
        <path d="M4,12h-2" />
        <path d="M10,12h-2" />
        <path d="M16,12h-2" />
        <path d="M22,12h-2" />
      </svg>
    );
  },
);

export default FlipVertical;
