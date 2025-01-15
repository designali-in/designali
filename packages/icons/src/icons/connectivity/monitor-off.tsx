import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17,17H4c-1.1,0-2-.9-2-2V5c0-1.5,1-2,1-2" />
        <path d="M22,15V5c0-1.1-.9-2-2-2h-11" />
        <path d="M8,21h8" />
        <path d="M12,17v4" />
        <path d="M2,2l20,20" />
      </svg>
    );
  },
);

export default MonitorOff;
