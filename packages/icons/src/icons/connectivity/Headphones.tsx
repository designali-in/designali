import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Headphones = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M2,14.22h3.33c1.23,0,2.22.99,2.22,2.22v3.33c0,1.23-.99,2.22-2.22,2.22h-1.11c-1.23,0-2.22-.99-2.22-2.22v-7.78C2,6.48,6.48,2,12,2s10,4.48,10,10v7.78c0,1.23-.99,2.22-2.22,2.22h-1.11c-1.23,0-2.22-.99-2.22-2.22v-3.33c0-1.23.99-2.22,2.22-2.22h3.33"/>
       </svg>
    );
  },
);

export default Headphones;
