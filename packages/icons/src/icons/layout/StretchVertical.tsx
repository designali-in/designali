import * as React from "react";

import type { DesignaliProps } from "../../types";

export const StretchVertical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="6" height="20" x="4" y="2" rx="2" />
        <rect width="6" height="20" x="14" y="2" rx="2" />
      </svg>
    );
  },
);

export default StretchVertical;
