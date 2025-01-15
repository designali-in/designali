import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Antenna = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,12L7,2" />
        <path d="M7,12L12,2" />
        <path d="M12,12l5-10" />
        <path d="M17,12l5-10" />
        <path d="M4.5,7h15" />
        <path d="M12,16v6" />
      </svg>
    );
  },
);

export default Antenna;
