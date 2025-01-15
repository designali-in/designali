import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BatteryCharging = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M15,7h1c1.1,0,2,.9,2,2v6c0,1.1-.9,2-2,2h-2"/>
  <path  d="M6,7h-2c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h1"/>
  <path  d="M11,7l-3,5h4l-3,5"/>
  <line  x1="22" y1="11" x2="22" y2="13"/>
</svg>
    );
  },
);

export default BatteryCharging;
