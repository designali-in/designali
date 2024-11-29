import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Goal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 13V2l8 4-8 4" />
        <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
        <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
      </svg>
    );
  },
);

export default Goal;
