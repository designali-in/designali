import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorSmartphone = React.forwardRef<
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
      <path d="M18,7v-2c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v7c0,1.1.9,2,2,2h8" />
      <path d="M10,18v-3.96,3.15" />
      <path d="M7,18h5" />
      <rect x="16" y="11" width="6" height="10" rx="2" ry="2" />
    </svg>
  );
});

export default MonitorSmartphone;
