import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Socks = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M21.44,12c-1.84,0-3.33,1.49-3.33,3.33,0,.85.32,1.63.85,2.22" />

        <path d="M21.44,5.33v8.16c0,1.18-.47,2.31-1.31,3.15l-4.23,4.22c-1.53,1.53-4.01,1.53-5.54,0-1.53-1.53-1.53-4.01,0-5.53l3.3-3.32v-6.67" />
        <path d="M10.33,5.33h-3.33v-1.11c0-1.05,0-1.57.33-1.9.33-.33.85-.33,1.9-.33h1.11" />
        <path d="M7,5.33v6.67l-3.3,3.32c-1.53,1.53-1.53,4.01,0,5.53.9.9,2.13,1.27,3.3,1.11" />
        <line x1="3.94" y1="15.05" x2="6.26" y2="16.95" />
        <line x1="10.46" y1="15.23" x2="16" y2="20.78" />
        <path d="M14.82,2h5.72c.5,0,.91.41.91.91v2.42h-7.78v-2.18c0-.63.51-1.15,1.15-1.15Z" />
      </svg>
    );
  },
);

export default Socks;
