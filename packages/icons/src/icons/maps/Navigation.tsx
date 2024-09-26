import * as React from "react";

import { DesignaliProps } from "../types";

export const Navigation = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    );
  },
);

export default Navigation;
