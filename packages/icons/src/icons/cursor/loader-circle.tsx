import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LoaderCircle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M22,12c0,5.52-4.48,10-10,10-5.52,0-10-4.48-10-10,0-5.52,4.48-10,10-10,1.05,0,2.09.17,3.09.49" />
      </svg>
    );
  },
);

export default LoaderCircle;
