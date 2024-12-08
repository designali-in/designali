import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Crab = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17,3c2.29,0,6.1,0,4.7,4.97M21.7,7.97c-1.33.17-3.18.53-3.68-1.97M21.7,7.97l.09.73c.18,1.42-.43,2.83-1.6,3.69l-2.3,1.7" />
        <path d="M7,3c-2.29,0-6.1,0-4.7,4.97M2.3,7.97c1.33.17,3.18.53,3.68-1.97M2.3,7.97l-.09.73c-.18,1.42.43,2.83,1.6,3.69l2.3,1.7" />
        <path d="M18,15.19c0,2.28-2.64,4.28-4.42,5.36-.98.6-2.18.6-3.16,0-1.78-1.08-4.42-3.08-4.42-5.36,0-3.44,2.69-5.19,6-5.19s6,1.75,6,5.19Z" />
        <path d="M8.26,19c-1.45,0-3.17,0-4.26,2M15.74,19c1.45,0,3.17,0,4.26,2" />
        <path d="M6.28,16.5c-1,0-3.28-.5-4.28-2M17.7,16.54c1,0,3.3-.54,4.3-2.04" />
        <path d="M13.96,10.22l.54-1.72M10.04,10.22l-.54-1.72" />
      </svg>
    );
  },
);

export default Crab;
