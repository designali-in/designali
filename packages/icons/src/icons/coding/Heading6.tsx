import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Heading6 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4 12h8" />
        <path d="M4 18V6" />
        <path d="M12 18V6" />
        <circle cx="19" cy="16" r="2" />
        <path d="M20 10c-2 2-3 3.5-3 6" />
      </svg>
    );
  },
);

export default Heading6;
