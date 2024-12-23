import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building08 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6,22V4c0-1.1.9-2,2-2h8c1.1,0,2,.9,2,2v18H6Z" />
        <path d="M6,12h-2c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h2" />
        <path d="M18,9h2c1.1,0,2,.9,2,2v9c0,1.1-.9,2-2,2h-2" />
        <path d="M10,6h4" />
        <path d="M10,10h4" />
        <path d="M10,14h4" />
        <path d="M10,18h4" />
      </svg>
    );
  },
);

export default Building08;
