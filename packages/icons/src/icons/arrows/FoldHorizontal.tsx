import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FoldHorizontal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2 12h6" />
        <path d="M22 12h-6" />
        <path d="M12 2v2" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="M12 20v2" />
        <path d="m19 9-3 3 3 3" />
        <path d="m5 15 3-3-3-3" />
      </svg>
    );
  },
);

export default FoldHorizontal;
