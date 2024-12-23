import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Building04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11,2v12c0,3.31-.69,4-4,4H3" />
        <path d="M14,5v17H4.28c-1.24,0-1.86,0-2.15-.43s-.08-1.03.35-2.25L7.78,3.98c.33-.96.5-1.44.87-1.71.37-.27.86-.27,1.83-.27h.64c1.35,0,2.03,0,2.45.44.42.44.42,1.15.42,2.56Z" />
        <path d="M14,10l3.79,1.18c2.03.63,3.04.95,3.63,1.74.58.79.58,1.86.58,3.98v3.09c0,.94,0,1.41-.29,1.71s-.76.29-1.71.29h-6" />
        <line x1="6.05" y1="9" x2="11" y2="9" />
        <line x1="17.11" y1="18.84" x2="18.89" y2="18.84" />
        <line x1="17.11" y1="15.16" x2="18.89" y2="15.16" />
      </svg>
    );
  },
);

export default Building04;
