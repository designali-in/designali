import * as React from "react";

import { DesignaliProps } from "../types";

export const AlignLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      >
        <path d="M15 12H3" />
        <path d="M17 18H3" />
        <path d="M21 6H3" />
      </svg>
    );
  },
);

export default AlignLeft;
