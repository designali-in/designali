import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardSquareAdd = React.forwardRef<
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
      <rect x="2" y="2" width="7.5" height="7.5" rx="1.94" ry="1.94" />
      <rect x="2" y="14.5" width="7.5" height="7.5" rx="1.94" ry="1.94" />
      <rect x="14.5" y="14.5" width="7.5" height="7.5" rx="1.94" ry="1.94" />
      <line x1="17.75" y1="2" x2="17.75" y2="10.5" />
      <line x1="13.5" y1="6" x2="22" y2="6" />
    </svg>
  );
});

export default DashboardSquareAdd;
