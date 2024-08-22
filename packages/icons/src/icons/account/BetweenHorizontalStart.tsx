import * as React from "react";

import { DesignaliProps } from "../../types";

export const BetweenHorizontalStart = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ color = "currentColor", ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
      ref={forwardedRef}
    >
      <rect width="13" height="7" x="8" y="3" rx="1" />
      <path d="m2 9 3 3-3 3" />
      <rect width="13" height="7" x="8" y="14" rx="1" />
    </svg>
  );
});

export default BetweenHorizontalStart;
