import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Music2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="8" cy="18" r="4" />
        <path d="M12 18V2l7 4" />
      </svg>
    );
  },
);

export default Music2;
