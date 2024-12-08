import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Rabbit = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M20,9.04v-4.54c0-1.1-.9-2-2-2s-2,.9-2,2v3" />

        <path d="M7.61,13.02c-.82-1.44-2.65-1.95-4.09-1.14-1.44.82-1.95,2.65-1.14,4.09.72,1.27,2.25,1.84,3.62,1.35" />
        <path d="M18,21.5h-8c-2.21,0-4-1.79-4-4,0-3.87,3.13-7,7-7h.2l-3.6-3.6c-.77-.77-.77-2.03,0-2.8.77-.77,2.03-.77,2.8,0l3.4,3.4h.2c3.3,0,6,2.7,6,6v1c0,1.1-.9,2-2,2h-1c-1.66,0-3,1.34-3,3" />
        <path d="M13,16.5c1.66,0,3,1.34,3,3,0,.74-.27,1.45-.76,2" />
        <path d="M18,12.5h.01" />
      </svg>
    );
  },
);

export default Rabbit;
