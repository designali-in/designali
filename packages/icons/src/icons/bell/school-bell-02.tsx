import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SchoolBell02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.04,10.65l-.09.13c-.87,1.27-2.32,2.04-3.86,2.04h-.11c-.87,0-1.3,1.05-.69,1.66l7.23,7.23c.61.61,1.66.18,1.66-.69v-.11c0-1.54.76-2.99,2.04-3.86l.13-.09c2.35-1.61,2.66-4.95.65-6.96-2.01-2.01-5.36-1.7-6.96.65Z" />
        <path d="M19.77,17.55c-.2,1.09-.73,2.12-1.58,2.95-.81.78-1.8,1.27-2.86,1.49" />
        <path d="M6.45,4.23c-1.07.23-2.07.75-2.88,1.56-.81.81-1.33,1.81-1.56,2.88" />
        <path d="M13.11,8.45l4.32-5.47c.95-1.2,2.73-1.31,3.82-.22,1.08,1.08.98,2.87-.22,3.82l-5.47,4.32" />
        <path d="M7.56,20.12c-1.02,1.02-2.66,1.02-3.68,0-1.02-1.02-1.02-2.66,0-3.68" />
      </svg>
    );
  },
);

export default SchoolBell02;
