import * as React from "react";

import { DesignaliProps } from "../../types";

export const LampDesk = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m14 5-3 3 2 7 8-8-7-2Z" />
        <path d="m14 5-3 3-3-3 3-3 3 3Z" />
        <path d="M9.5 6.5 4 12l3 6" />
        <path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
      </svg>
    );
  },
);

export default LampDesk;
