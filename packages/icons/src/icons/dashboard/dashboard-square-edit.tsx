import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardSquareEdit = React.forwardRef<
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
      <path d="M21.66,4.04c.47-.47.47-1.23,0-1.7-.47-.47-1.23-.47-1.7,0l-5.68,5.68c-.1.1-.17.22-.21.35l-.56,1.85c-.03.11.03.23.14.26.04.01.08.01.12,0l1.85-.56c.13-.04.25-.11.35-.21l5.68-5.68Z" />
    </svg>
  );
});

export default DashboardSquareEdit;
