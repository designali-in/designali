import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Necklace = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.54,12l.39-3.12c.09-.73.42-.88,1.11-.88s1.02.15,1.11.88l.39,3.12" />
        <path d="M8.28,12.61c1.34-.81,2.5-.48,3.2.04.29.21.43.32.52.32s.23-.11.52-.32c.7-.52,1.87-.85,3.2-.04,1.75,1.06,2.15,4.58-1.89,7.54-.77.56-1.15.85-1.82.85s-1.05-.28-1.82-.85c-4.04-2.96-3.65-6.48-1.89-7.54Z" />
        <path d="M2,3.29c.16.67.61,2.18,1.95,3.52,1.67,1.67,3.63,2.01,4.28,2.1" />
        <path d="M22,3.29c-.16.67-.61,2.18-1.95,3.52-1.67,1.67-3.63,2.01-4.28,2.1" />
      </svg>
    );
  },
);

export default Necklace;
