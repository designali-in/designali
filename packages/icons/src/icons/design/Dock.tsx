import * as React from "react";

import { DesignaliProps } from "../types";

export const Dock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 8h20" />
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M6 16h12" />
      </svg>
    );
  },
);

export default Dock;
