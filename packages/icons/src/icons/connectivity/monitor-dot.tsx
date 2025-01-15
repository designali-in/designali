import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorDot = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
       <circle  cx="19" cy="6" r="3"/>
  <path  d="M22,12v3c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h9"/>
  <path  d="M12,17v4"/>
  <path  d="M8,21h8"/>
</svg>
    );
  },
);

export default MonitorDot;
