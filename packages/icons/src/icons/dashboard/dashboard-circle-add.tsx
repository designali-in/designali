import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardCircleAdd = React.forwardRef<
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
      <circle cx="6.25" cy="6.25" r="4.25" />
      <circle cx="6.25" cy="17.75" r="4.25" />
      <circle cx="17.75" cy="17.75" r="4.25" />
      <line x1="17.75" y1="2" x2="17.75" y2="10.5" />
      <line x1="13.5" y1="6" x2="22" y2="6" />
    </svg>
  );
});

export default DashboardCircleAdd;
