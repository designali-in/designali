import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Honor = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2.5,3h19" />
        <path d="M4.5,3v11c0,2.33.43,3.09,2.43,4.29l3.01,1.81c1,.6,1.5.9,2.06.9s1.06-.3,2.06-.9l3.01-1.81c2-1.2,2.43-1.96,2.43-4.29V3" />
        <path d="M14.5,13h-5M14.5,8h-5" />
      </svg>
    );
  },
);

export default Honor;
