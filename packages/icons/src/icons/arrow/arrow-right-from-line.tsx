import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowRightFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path d="M2,4.22v15.56"/>
  <path d="M22,12H6.44"/>
  <path d="M15.33,18.67l6.67-6.67-6.67-6.67"/>
</svg>
    );
  },
);

export default ArrowRightFromLine;
