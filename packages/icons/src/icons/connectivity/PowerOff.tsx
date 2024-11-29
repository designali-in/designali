import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PowerOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
        <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
        <path d="M12 2v4" />
        <path d="m2 2 20 20" />
      </svg>
    );
  },
);

export default PowerOff;
