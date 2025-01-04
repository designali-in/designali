import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CirclePlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path d="M8,12h8" />
        <path d="M12,8v8" />
      </svg>
    );
  },
);

export default CirclePlus;
