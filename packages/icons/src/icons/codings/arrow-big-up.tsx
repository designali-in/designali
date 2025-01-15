import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigUp = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.72,21.28v-8.56H2.01L12,2.72l9.99,9.99h-5.71v8.56H7.72Z" />
      </svg>
    );
  },
);

export default ArrowBigUp;
