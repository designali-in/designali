import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Grab = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,9.5v-2.5c0-1.1-.9-2-2-2s-2,.9-2,2v1.4" />
        <path d="M14,8v-2c0-1.1-.9-2-2-2s-2,.9-2,2v2" />
        <path d="M10,7.9v-.9c0-1.1-.9-2-2-2s-2,.9-2,2v5" />
        <path d="M6,12c0-1.1-.9-2-2-2s-2,.9-2,2" />
        <path d="M18,9c0-1.1.9-2,2-2s2,.9,2,2v3c0,4.42-3.58,8-8,8h-4c-4.42,0-8-3.58-8-8,0-1.1.9-2,2-2s2,.9,2,2" />
      </svg>
    );
  },
);

export default Grab;
