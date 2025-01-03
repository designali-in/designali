import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Scale = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path  d="M16,14.86l3-8,3,8c-.87.65-1.92,1-3,1s-2.13-.35-3-1Z"/>
  <path  d="M2,14.86l3-8,3,8c-.87.65-1.92,1-3,1s-2.13-.35-3-1Z"/>
  <path  d="M7,19.86h10"/>
  <path  d="M12,1.86v18"/>
  <path  d="M3,5.86h2c2,0,5-1,7-2,2,1,5,2,7,2h2"/>
</svg>
    );
  },
);

export default Scale;
