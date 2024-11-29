import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Plug2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M9 2v6" />
        <path d="M15 2v6" />
        <path d="M12 17v5" />
        <path d="M5 8h14" />
        <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
      </svg>
    );
  },
);

export default Plug2;
