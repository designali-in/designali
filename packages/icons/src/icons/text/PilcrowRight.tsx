import * as React from "react";

import { DesignaliProps } from "../types";

export const PilcrowRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10 3v11" />
        <path d="M10 9H7a1 1 0 0 1 0-6h8" />
        <path d="M14 3v11" />
        <path d="m18 14 4 4H2" />
        <path d="m22 18-4 4" />
      </svg>
    );
  },
);

export default PilcrowRight;
