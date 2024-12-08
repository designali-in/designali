import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BugPlay = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.31,21.92c-.24.15-.55.08-.7-.16-.05-.08-.08-.17-.08-.27v-8.36c0-.28.23-.51.51-.51.1,0,.19.03.27.08l6,3.75c.48.3.62.93.32,1.41-.08.13-.19.24-.32.32l-6,3.75Z" />
        <path d="M14.69,3.92l1.92-1.92" />

        <path d="M9.46,7.24v-1.02c-.08-1.69,1.23-3.12,2.92-3.2,1.69-.08,3.12,1.23,3.2,2.92,0,.09,0,.18,0,.27v1.02" />
        <path
          fill="none"
          d="M18.65,11.18c0-2.25-1.83-4.08-4.08-4.08h-4.08c-2.25,0-4.08,1.83-4.08,4.08v3.06c0,1.75.75,3.42,2.04,4.59"
        />
        <path fill="none" d="M21.68,5.06c0,2.14-1.63,3.88-3.57,4.08" />
        <path fill="none" d="M3.34,21.39c0-2.14,1.73-3.98,3.88-4.08" />
        <path d="M6.4,13.23H2.32" />
        <path fill="none" d="M6.94,9.14c-1.97-.2-3.6-1.94-3.6-4.08" />
        <path d="M8.44,2l1.92,1.92" />
      </svg>
    );
  },
);

export default BugPlay;
