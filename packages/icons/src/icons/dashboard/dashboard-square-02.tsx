import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardSquare02 = React.forwardRef<
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
      <rect x="2" y="2" width="7.5" height="10.59" rx="1.94" ry="1.94" />
      <rect x="2" y="16.3" width="7.5" height="5.7" rx="1.94" ry="1.94" />
      <rect x="14.5" y="11.41" width="7.5" height="10.59" rx="1.94" ry="1.94" />
      <rect x="14.5" y="2" width="7.5" height="5.7" rx="1.94" ry="1.94" />
    </svg>
  );
});

export default DashboardSquare02;
