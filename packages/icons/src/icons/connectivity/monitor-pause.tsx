import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorPause = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,13v-6" />
        <path d="M14,13v-6" />
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M12,17v4" />
        <path d="M8,21h8" />
      </svg>
    );
  },
);

export default MonitorPause;
