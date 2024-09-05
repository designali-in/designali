import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Diff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 3v14" />
        <path d="M5 10h14" />
        <path d="M5 21h14" />
      </svg>
    );
  },
);

export default Diff;
