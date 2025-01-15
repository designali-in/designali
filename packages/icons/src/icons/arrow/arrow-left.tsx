import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,22L2,12,12,2"/>
  <path d="M22,12H2"/>
</svg>
    );
  },
);

export default ArrowLeft;
