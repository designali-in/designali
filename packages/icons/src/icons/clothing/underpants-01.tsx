import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Underpants01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14,17l.35,1c.32.94.48,1.42.84,1.7.02.02.05.03.07.05.38.26.88.26,1.89.26,2.29,0,3.43,0,4.17-.72.04-.04.09-.09.13-.14.68-.78.61-1.86.47-4.03-.23-3.55-.68-6.41-1.12-8.41-.26-1.21-.4-1.81-.95-2.26-.55-.44-1.24-.44-2.61-.44H6.77c-1.37,0-2.05,0-2.61.44-.55.44-.68,1.05-.95,2.26-.44,2-.89,4.86-1.12,8.41-.14,2.17-.21,3.25.47,4.03.04.04.09.09.13.14.74.72,1.88.72,4.17.72,1,0,1.5,0,1.89-.26.02-.02.05-.03.07-.05.37-.28.53-.75.84-1.7l.33-1" />
        <path d="M8.5,15c.6,1.2,2.22,2.5,3.5,2.5s2.9-1.3,3.5-2.5" />
        <line x1="3.11" y1="7.21" x2="20.89" y2="7.21" />
      </svg>
    );
  },
);

export default Underpants01;
