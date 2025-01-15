import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ChartNoAxesGantt = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.33,2h16.67" />
        <path d="M2,12h15" />
        <path d="M10.33,22h11.67" />
      </svg>
    );
  },
);

export default ChartNoAxesGantt;
