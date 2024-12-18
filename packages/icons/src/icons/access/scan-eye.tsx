import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ScanEye = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,6.44v-2.22c0-1.23.99-2.22,2.22-2.22h2.22" />
        <path d="M17.56,2h2.22c1.23,0,2.22.99,2.22,2.22v2.22" />
        <path d="M22,17.56v2.22c0,1.23-.99,2.22-2.22,2.22h-2.22" />
        <path d="M6.44,22h-2.22c-1.23,0-2.22-.99-2.22-2.22v-2.22" />
        <circle cx="12" cy="12" r="1.11" />
        <path d="M19.72,12.37c.08-.24.08-.5,0-.73-1.74-4.26-6.6-6.31-10.86-4.57-2.07.85-3.72,2.49-4.57,4.57-.08.24-.08.5,0,.73,1.74,4.26,6.6,6.31,10.86,4.57,2.07-.85,3.72-2.49,4.57-4.57" />
      </svg>
    );
  },
);

export default ScanEye;
