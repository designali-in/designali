import * as React from "react";

import { DesignaliProps } from "../../types";

export const Merge = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
        <path d="m20 22-5-5" />
      </svg>
    );
  },
);

export default Merge;
