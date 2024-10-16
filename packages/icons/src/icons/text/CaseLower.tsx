import * as React from "react";

import { DesignaliProps } from "../types";

export const CaseLower = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="7" cy="12" r="3" />
        <path d="M10 9v6" />
        <circle cx="17" cy="12" r="3" />
        <path d="M14 7v8" />
      </svg>
    );
  },
);

export default CaseLower;
