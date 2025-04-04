import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SquareArrowUpLeft = React.forwardRef<
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 16V8h8" />
      <path d="M16 16 8 8" />
    </svg>
  );
});

export default SquareArrowUpLeft;
