import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TimerReset = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,2h4" />
        <path d="M12,14v-4" />
        <path d="M4,13c.51-4.02,3.94-7.03,8-7,4.42,0,8,3.59,7.99,8.01,0,4.42-3.59,8-8.01,7.99-1.95,0-3.82-.71-5.28-2l-2.7-2.4" />
        <path d="M9,17h-5v5" />
      </svg>
    );
  },
);

export default TimerReset;
