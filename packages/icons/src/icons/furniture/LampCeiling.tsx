import * as React from "react";

import { DesignaliProps } from "../../types";

export const LampCeiling = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M12 2v5" />
        <path d="M6 7h12l4 9H2l4-9Z" />
        <path d="M9.17 16a3 3 0 1 0 5.66 0" />
      </svg>
    );
  },
);

export default LampCeiling;
