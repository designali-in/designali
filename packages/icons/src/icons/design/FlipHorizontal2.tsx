import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FlipHorizontal2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 7 5 5-5 5V7" />
        <path d="m21 7-5 5 5 5V7" />
        <path d="M12 20v2" />
        <path d="M12 14v2" />
        <path d="M12 8v2" />
        <path d="M12 2v2" />
      </svg>
    );
  },
);

export default FlipHorizontal2;
