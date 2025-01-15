import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FlipHorizontal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8,3h-3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h3" />
        <path d="M16,3h3c1.1,0,2,.9,2,2v14c0,1.1-.9,2-2,2h-3" />
        <path d="M12,20v2" />
        <path d="M12,14v2" />
        <path d="M12,8v2" />
        <path d="M12,2v2" />
      </svg>
    );
  },
);

export default FlipHorizontal;
