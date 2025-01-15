import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BetweenVerticalStart = React.forwardRef<
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
      <rect x="2.55" y="8.32" width="7.35" height="13.65" rx="1.05" ry="1.05" />
      <path d="M15.15,2.02l-3.15,3.15-3.15-3.15" />
      <rect x="14.1" y="8.32" width="7.35" height="13.65" rx="1.05" ry="1.05" />
    </svg>
  );
});

export default BetweenVerticalStart;
