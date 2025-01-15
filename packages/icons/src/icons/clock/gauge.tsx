import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Gauge = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,14.55l4-4" />
        <path d="M3.34,19.55c-2.76-4.78-1.12-10.9,3.66-13.66s10.9-1.12,13.66,3.66c1.79,3.09,1.79,6.91,0,10" />
      </svg>
    );
  },
);

export default Gauge;
