import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Tablet = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M22,12c0,2.76-1.12,5.26-2.93,7.07-1.81,1.81-4.31,2.93-7.07,2.93s-5.26-1.12-7.07-2.93-2.93-4.31-2.93-7.07,1.12-5.26,2.93-7.07,4.31-2.93,7.07-2.93,5.26,1.12,7.07,2.93,2.93,4.31,2.93,7.07Z" />
      </svg>
    );
  },
);

export default Tablet;
