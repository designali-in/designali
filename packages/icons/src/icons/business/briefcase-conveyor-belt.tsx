import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BriefcaseConveyorBelt = React.forwardRef<
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
      <path d="M10,20v2" />
      <path d="M14,20v2" />
      <path d="M18,20v2" />
      <path d="M21,20H3" />
      <path d="M6,20v2" />
      <path d="M8,16V4c0-1.1.9-2,2-2h4c1.1,0,2,.9,2,2v12" />
      <rect x="4" y="6" width="16" height="10" rx="2" ry="2" />
    </svg>
  );
});

export default BriefcaseConveyorBelt;
