import * as React from "react";

import { DesignaliProps } from "../types";

export const Navigation2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polygon points="12 2 19 21 12 17 5 21 12 2" />
      </svg>
    );
  },
);

export default Navigation2;
