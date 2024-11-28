import * as React from "react";

import { DesignaliProps } from "../types";

export const PanelTopDashed = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M14 9h1" />
        <path d="M19 9h2" />
        <path d="M3 9h2" />
        <path d="M9 9h1" />
      </svg>
    );
  },
);

export default PanelTopDashed;
