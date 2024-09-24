import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HandPlater = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 3V2" />
        <path d="M5 10a7.1 7.1 0 0 1 14 0" />
        <path d="M4 10h16" />
        <path d="M2 14h12a2 2 0 1 1 0 4h-2" />
        <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" />
        <path d="M5 14v7H2" />
      </svg>
    );
  },
);

export default HandPlater;
