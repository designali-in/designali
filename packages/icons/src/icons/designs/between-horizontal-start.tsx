import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BetweenHorizontalStart = React.forwardRef<
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
      <path d="M9.37,2.45h11.58c.58,0,1.05.48,1.05,1.06v5.31c0,.59-.47,1.06-1.05,1.06h-11.58c-.58,0-1.05-.48-1.05-1.06V3.51c0-.59.47-1.06,1.05-1.06Z" />
      <path d="M2,8.82l3.16,3.18-3.16,3.18" />
      <path d="M9.37,14.12h11.58c.58,0,1.05.48,1.05,1.06v5.31c0,.59-.47,1.06-1.05,1.06h-11.58c-.58,0-1.05-.48-1.05-1.06v-5.31c0-.59.47-1.06,1.05-1.06Z" />
    </svg>
  );
});

export default BetweenHorizontalStart;
