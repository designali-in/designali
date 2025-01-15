import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Happy = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M15,8s-1,1-1,2c.75-1,2.25-1,3,0"/>
  <path  d="M9,8s1,1,1,2c-.75-1-2.25-1-3,0"/>
  <circle  cx="12" cy="12" r="10"/>
  <path  d="M8,14s1.5,2,4,2,4-2,4-2"/>
</svg>
    );
  },
);

export default Happy;
