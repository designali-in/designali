import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Navigation = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    );
  },
);

export default Navigation;
