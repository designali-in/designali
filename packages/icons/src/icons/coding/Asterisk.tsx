import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Asterisk = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      >
        <path d="M12 6v12" />
        <path d="M17.196 9 6.804 15" />
        <path d="m6.804 9 10.392 6" />
      </svg>
    );
  },
);

export default Asterisk;
