import * as React from "react";

import type { DesignaliProps } from "../../types";

export const UnfoldHorizontal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16 12h6" />
        <path d="M8 12H2" />
        <path d="M12 2v2" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="M12 20v2" />
        <path d="m19 15 3-3-3-3" />
        <path d="m5 9-3 3 3 3" />
      </svg>
    );
  },
);

export default UnfoldHorizontal;
