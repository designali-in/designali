import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowBigUpDash = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.71,22h8.57" />
        <path d="M7.71,16.29v-4.29H2L12,2l10,10h-5.71v4.29H7.71Z" />
      </svg>
    );
  },
);

export default ArrowBigUpDash;
