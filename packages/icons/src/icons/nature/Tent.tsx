import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Tent = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.5 21 14 3" />
        <path d="M20.5 21 10 3" />
        <path d="M15.5 21 12 15l-3.5 6" />
        <path d="M2 21h20" />
      </svg>
    );
  },
);

export default Tent;
