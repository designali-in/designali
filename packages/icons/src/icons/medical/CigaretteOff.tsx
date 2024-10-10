import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CigaretteOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
        <path d="M18 8c0-2.5-2-2.5-2-5" />
        <path d="m2 2 20 20" />
        <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
        <path d="M22 8c0-2.5-2-2.5-2-5" />
        <path d="M7 12v4" />
      </svg>
    );
  },
);

export default CigaretteOff;
