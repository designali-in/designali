import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardSpeed01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="2" y="2" width="20" height="20" rx="4.57" ry="4.57" />
        <path d="M5.5,12.88c0-4.47,3.61-8.08,8.08-8.08" />
        <circle cx="12.38" cy="15.1" r="2.51" />
        <line x1="15.69" y1="8.79" x2="13.55" y2="12.87" />
      </svg>
    );
  },
);

export default DashboardSpeed01;
