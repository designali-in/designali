import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ClockArrowDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.34,21.99c-5.52.19-10.15-4.14-10.33-9.66C1.82,6.82,6.14,2.19,11.66,2.01c5.52-.19,10.15,4.14,10.33,9.66.02.52,0,1.05-.07,1.56" />
        <path d="M12,6v6l2,1" />
        <path d="M14,18l4,4,4-4" />
        <path d="M18,14v8" />
      </svg>
    );
  },
);

export default ClockArrowDown;
