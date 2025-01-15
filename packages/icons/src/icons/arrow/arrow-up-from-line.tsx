import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowUpFromLine = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M18.67,8.67l-6.67-6.67-6.67,6.67"/>
  <path  d="M12,2v15.56"/>
  <path  d="M4.22,22h15.56"/>
</svg>
    );
  },
);

export default ArrowUpFromLine;
