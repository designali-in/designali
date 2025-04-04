import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Signal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,20h0" />
        <path d="M7,20v-4" />
        <path d="M12,20v-8" />
        <path d="M17,20v-12" />
        <path d="M22,4v16" />
      </svg>
    );
  },
);

export default Signal;
