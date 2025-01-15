import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ClockArrowUp = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.23,21.92c-5.48.68-10.47-3.21-11.15-8.7C1.4,7.75,5.29,2.75,10.77,2.08c5.48-.68,10.47,3.21,11.15,8.7.06.52.09,1.04.07,1.57" />
        <path d="M12,6v6l1.56.78" />
        <path d="M14,18l4-4,4,4" />
        <path d="M18,22v-8" />
      </svg>
    );
  },
);

export default ClockArrowUp;
