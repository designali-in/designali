import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AnimationMoveTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path fill="none" d="M16,6.04l-4-4-4,4" />
        <path d="M12,12.6V2.04" />
        <circle cx="12" cy="19.84" r="2.16" />
      </svg>
    );
  },
);

export default AnimationMoveTop;
