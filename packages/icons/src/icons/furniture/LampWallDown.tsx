import * as React from "react";

import { DesignaliProps } from "../../types";

export const LampWallDown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11 13h6l3 7H8l3-7Z" />
        <path d="M14 13V8a2 2 0 0 0-2-2H8" />
        <path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" />
      </svg>
    );
  },
);

export default LampWallDown;
