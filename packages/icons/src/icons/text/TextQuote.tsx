import * as React from "react";

import { DesignaliProps } from "../types";

export const TextQuote = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17 6H3" />
        <path d="M21 12H8" />
        <path d="M21 18H8" />
        <path d="M3 12v6" />
      </svg>
    );
  },
);

export default TextQuote;
