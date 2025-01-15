import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Axis3d = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,2v20h20" />
        <path d="M2,22l8.75-8.75" />
      </svg>
    );
  },
);

export default Axis3d;
