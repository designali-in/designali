import * as React from "react";

import type { DesignaliProps } from "../../types";

export const CloudOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M2,2l20,20" />
        <path d="M5.78,5.78c-3.43,1.78-4.78,6-3,9.43,1.2,2.33,3.6,3.79,6.22,3.78h8.5c.44,0,.88-.06,1.31-.19" />
        <path d="M21.53,16.5c1.1-2.23.2-4.93-2.03-6.03-.62-.31-1.31-.47-2-.47h-1.79c-.78-2.61-3.01-4.54-5.71-4.93" />
      </svg>
    );
  },
);

export default CloudOff;
