import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UnfoldVertical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 22v-6" />
        <path d="M12 8V2" />
        <path d="M4 12H2" />
        <path d="M10 12H8" />
        <path d="M16 12h-2" />
        <path d="M22 12h-2" />
        <path d="m15 19-3 3-3-3" />
        <path d="m15 5-3-3-3 3" />
      </svg>
    );
  },
);

export default UnfoldVertical;
