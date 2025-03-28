import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MoonStar = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </svg>
    );
  },
);

export default MoonStar;
