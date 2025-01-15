import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Ring = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="14.55" r="7.42" />

        <path d="M10.39,2.03h3.22l1.07,1.61-2.69,3.49-2.69-3.49,1.07-1.61Z" />
        <path d="M11.73,2.03l-.81,1.61,1.07,3.49,1.07-3.49-.81-1.61" />
        <path d="M9.31,3.64h5.37" />
      </svg>
    );
  },
);

export default Ring;
