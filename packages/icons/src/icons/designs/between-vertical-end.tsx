import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BetweenVerticalEnd = React.forwardRef<
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
      <rect x="2.53" y="2" width="7.37" height="13.68" rx="1.05" ry="1.05" />
      <path d="M8.84,22l3.16-3.16,3.16,3.16" />
      <rect x="14.1" y="2" width="7.37" height="13.68" rx="1.05" ry="1.05" />
    </svg>
  );
});

export default BetweenVerticalEnd;
