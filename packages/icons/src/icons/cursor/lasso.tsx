import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Lasso = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M7,22c-1.26-.94-2-2.43-2-4"/>
  <path  d="M3.3,14c-.85-1.16-1.3-2.56-1.3-4C2,5.6,6.5,2,12,2s10,3.6,10,8-4.5,8-10,8c-1.72.03-3.42-.31-5-1"/>
  <path  d="M5,18c1.1,0,2-.9,2-2s-.9-2-2-2-2,.9-2,2,.9,2,2,2Z"/>
</svg>
    );
  },
);

export default Lasso;
