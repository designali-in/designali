import * as React from "react";

import { DesignaliProps } from "../../types";

export const TentTree = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="4" cy="4" r="2" />
        <path d="m14 5 3-3 3 3" />
        <path d="m14 10 3-3 3 3" />
        <path d="M17 14V2" />
        <path d="M17 14H7l-5 8h20Z" />
        <path d="M8 14v8" />
        <path d="m9 14 5 8" />
      </svg>
    );
  },
);

export default TentTree;
