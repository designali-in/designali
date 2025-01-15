import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Diaper = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,7.69c0-.64,0-.96.05-1.23.22-1.23,1.18-2.19,2.41-2.41.27-.05.59-.05,1.23-.05h12.62c.64,0,.96,0,1.23.05,1.23.22,2.19,1.18,2.41,2.41.05.27.05.59.05,1.23v2.31c0,5.52-4.48,10-10,10S2,15.52,2,10v-2.31Z" />
        <path d="M14.5,19.5v-1c0-3.87,3.13-7,7-7" />
        <path d="M9.5,19.5v-1c0-3.87-3.13-7-7-7" />
        <line x1="2" y1="7.64" x2="5.81" y2="7.64" />
        <line x1="2" y1="7.64" x2="5.81" y2="7.64" />
        <line x1="18.16" y1="7.64" x2="21.97" y2="7.64" />
      </svg>
    );
  },
);

export default Diaper;
