import * as React from "react";

import { DesignaliProps } from "../types";

export const Move3D = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5 3v16h16" />
        <path d="m5 19 6-6" />
        <path d="m2 6 3-3 3 3" />
        <path d="m18 16 3 3-3 3" />
      </svg>
    );
  },
);

export default Move3D;
