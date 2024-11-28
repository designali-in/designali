import * as React from "react";

import { DesignaliProps } from "../../types";

export const Annoyed = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15h8" />
        <path d="M8 9h2" />
        <path d="M14 9h2" />
      </svg>
    );
  },
);

export default Annoyed;
