import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDownToDot = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12,2v14"/>
  <path  d="M19,9l-7,7-7-7"/>
  <circle  cx="12" cy="21" r="1"/>
</svg>
    );
  },
);

export default ArrowDownToDot;
