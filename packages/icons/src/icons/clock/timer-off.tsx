import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TimerOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,1.99h4" />
        <path d="M4.6,10.99c-1.24,2.98-.57,6.41,1.7,8.7,2.29,2.27,5.72,2.94,8.7,1.7" />
        <path d="M7.4,7.39c3.22-2.23,7.57-1.81,10.3,1,2.72,2.74,3.1,7.03.9,10.2" />
        <path d="M2,1.99l20,20" />
        <path d="M12,11.99v-2" />
      </svg>
    );
  },
);

export default TimerOff;
