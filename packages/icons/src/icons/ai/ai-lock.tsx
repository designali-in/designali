import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.3,18l-1.46-4.52c-.09-.28-.37-.48-.69-.48s-.6.19-.69.48l-1.46,4.52M15,13v5M8.54,16.5h3.23" />
        <rect
          x="3.88"
          y="9.15"
          width="16.24"
          height="12.85"
          rx="1.89"
          ry="1.89"
        />
        <path d="M7.66,9.15V3.89c0-1.04.84-1.89,1.89-1.89h4.91c1.04,0,1.89.84,1.89,1.89v5.27" />
      </svg>
    );
  },
);

export default AiLock;
