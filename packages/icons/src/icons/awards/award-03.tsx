import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Award03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M7.68,12.99c-.66-3.36-.99-5.04-.28-6.41.72-1.37,2.26-1.99,5.34-3.24l.63-.26c2.33-.95,3.49-1.42,4.19-.81.7.61.45,1.88-.04,4.42l-2.2,11.31h-6.65l-.99-5.01Z" />
        <path d="M6,21c0-1.41,0-2.12.44-2.56.44-.44,1.15-.44,2.56-.44h6c1.41,0,2.12,0,2.56.44.44.44.44,1.15.44,2.56v1H6v-1Z" />
        <path d="M4,22h16" />
      </svg>
    );
  },
);

export default Award03;
