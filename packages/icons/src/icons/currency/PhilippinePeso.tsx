import * as React from "react";

import { DesignaliProps } from "../types";

export const PhilippinePeso = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
        ref={forwardedRef}
      >
        <path d="M20 11H4" />
        <path d="M20 7H4" />
        <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
      </svg>
    );
  },
);

export default PhilippinePeso;
