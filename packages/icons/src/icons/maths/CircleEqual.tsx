import * as React from "react";

import { DesignaliProps } from "../../types";

export const CircleEqual = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7 10h10" />
        <path d="M7 14h10" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default CircleEqual;
