import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardBrowsing = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <line x1="2" y1="8.29" x2="22" y2="8.29" />
      <line x1="12.93" y1="15.41" x2="11.07" y2="17.26" />
      <path d="M6.86,17.68c0-2.84,2.3-5.14,5.14-5.14s5.14,2.3,5.14,5.14" />
      <circle cx="6.8" cy="5.16" r=".05" />
      <circle cx="10.24" cy="5.16" r=".05" />
    </svg>
  );
});

export default DashboardBrowsing;
