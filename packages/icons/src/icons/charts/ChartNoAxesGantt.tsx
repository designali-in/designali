import * as React from "react";

import { DesignaliProps } from "../../types";

export const ChartNoAxesGantt = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M8 6h10" />
        <path d="M6 12h9" />
        <path d="M11 18h7" />
      </svg>
    );
  },
);

export default ChartNoAxesGantt;
