import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Activity01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect  x="2" y="2" width="20" height="20" rx="4.33" ry="4.33"/>
  <path  d="M18,9.5l-5,5-4-4-3,3"/>
</svg>
    );
  },
);

export default Activity01;
