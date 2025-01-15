import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Blocks = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="14.22" y="2" width="7.78" height="7.78" rx="1.11" ry="1.11" />
        <path d="M9.78,22V7.56c0-.61-.5-1.11-1.11-1.11H3.11c-.61,0-1.11.5-1.11,1.11v13.33c0,.61.5,1.11,1.11,1.11h13.33c.61,0,1.11-.5,1.11-1.11v-5.56c0-.61-.5-1.11-1.11-1.11H2" />
      </svg>
    );
  },
);

export default Blocks;
