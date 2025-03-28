import * as React from "react";

import type { DesignaliProps } from "../../types";

export const RemoveFormatting = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4 7V4h16v3" />
        <path d="M5 20h6" />
        <path d="M13 4 8 20" />
        <path d="m15 15 5 5" />
        <path d="m20 15-5 5" />
      </svg>
    );
  },
);

export default RemoveFormatting;
