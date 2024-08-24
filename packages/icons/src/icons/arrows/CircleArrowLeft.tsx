import * as React from "react";

import { DesignaliProps } from "../../types";

export const CircleArrowLeft = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path d="M16 12H8" />
        <path d="m12 8-4 4 4 4" />
      </svg>
    );
  },
);

export default CircleArrowLeft;
