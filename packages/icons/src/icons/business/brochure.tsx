import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Brochure = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="5.87" y="2" width="12.26" height="20" rx="2.26" ry="2.26" />
        <path d="M5.87,5h-1.16c-1.5,0-2.71.69-2.71,1.54v10.93c0,.85,1.22,1.54,2.71,1.54h1.16" />
        <path d="M18.13,5h1.16c1.5,0,2.71.69,2.71,1.54v10.93c0,.85-1.22,1.54-2.71,1.54h-1.16" />

        <line x1="9.12" y1="7.45" x2="14.88" y2="7.45" />
        <line x1="9.12" y1="12" x2="14.88" y2="12" />
        <line x1="9.12" y1="16.55" x2="14.88" y2="16.55" />
      </svg>
    );
  },
);

export default Brochure;
