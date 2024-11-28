import * as React from "react";

import { DesignaliProps } from "../types";

export const TextSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21 6H3" />
        <path d="M10 12H3" />
        <path d="M10 18H3" />
        <circle cx="17" cy="15" r="3" />
        <path d="m21 19-1.9-1.9" />
      </svg>
    );
  },
);

export default TextSearch;
