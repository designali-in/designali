import * as React from "react";

import { DesignaliProps } from "../../types";

export const Ungroup = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="8" height="6" x="5" y="4" rx="1" />
        <rect width="8" height="6" x="11" y="14" rx="1" />
      </svg>
    );
  },
);

export default Ungroup;
