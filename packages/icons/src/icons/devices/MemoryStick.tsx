import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MemoryStick = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6 19v-3" />
        <path d="M10 19v-3" />
        <path d="M14 19v-3" />
        <path d="M18 19v-3" />
        <path d="M8 11V9" />
        <path d="M16 11V9" />
        <path d="M12 11V9" />
        <path d="M2 15h20" />
        <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
      </svg>
    );
  },
);

export default MemoryStick;
