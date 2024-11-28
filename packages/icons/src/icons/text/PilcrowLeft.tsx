import * as React from "react";

import { DesignaliProps } from "../types";

export const PilcrowLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14 3v11" />
        <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
        <path d="M18 3v11" />
        <path d="M22 18H2l4-4" />
        <path d="m6 22-4-4" />
      </svg>
    );
  },
);

export default PilcrowLeft;
