import * as React from "react";

import { DesignaliProps } from "../types";

export const Ratio = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="12" height="20" x="6" y="2" rx="2" />
        <rect width="20" height="12" x="2" y="6" rx="2" />
      </svg>
    );
  },
);

export default Ratio;
