import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Presentation = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,3h20" />
        <path d="M21,3v11c0,1.1-.9,2-2,2H5c-1.1,0-2-.9-2-2V3" />
        <path d="M7,21l5-5,5,5" />
      </svg>
    );
  },
);

export default Presentation;
