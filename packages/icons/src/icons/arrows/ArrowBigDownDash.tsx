import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigDownDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15 5H9" />
        <path d="M15 9v3h4l-7 7-7-7h4V9z" />
      </svg>
    );
  },
);

export default ArrowBigDownDash;
