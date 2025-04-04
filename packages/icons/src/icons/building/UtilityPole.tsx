import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UtilityPole = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 2v20" />
        <path d="M2 5h20" />
        <path d="M3 3v2" />
        <path d="M7 3v2" />
        <path d="M17 3v2" />
        <path d="M21 3v2" />
        <path d="m19 5-7 7-7-7" />
      </svg>
    );
  },
);

export default UtilityPole;
