import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ShipWheel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2v7.5" />
        <path d="m19 5-5.23 5.23" />
        <path d="M22 12h-7.5" />
        <path d="m19 19-5.23-5.23" />
        <path d="M12 14.5V22" />
        <path d="M10.23 13.77 5 19" />
        <path d="M9.5 12H2" />
        <path d="M10.23 10.23 5 5" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  },
);

export default ShipWheel;
