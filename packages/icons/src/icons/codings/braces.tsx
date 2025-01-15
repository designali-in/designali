import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Braces = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M7.56,2h-1.11c-1.23,0-2.22.99-2.22,2.22v5.56c0,1.23-.99,2.22-2.22,2.22,1.23,0,2.22.99,2.22,2.22v5.56c0,1.22,1,2.22,2.22,2.22h1.11"/>
  <path  d="M16.44,22h1.11c1.23,0,2.22-.99,2.22-2.22v-5.56c0-1.22,1-2.22,2.22-2.22-1.23,0-2.22-.99-2.22-2.22v-5.56c0-1.23-.99-2.22-2.22-2.22h-1.11"/>
</svg>
    );
  },
);

export default Braces;
