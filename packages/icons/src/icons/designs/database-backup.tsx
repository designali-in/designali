import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DatabaseBackup = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <ellipse cx="11.5" cy="5" rx="9" ry="3" />
        <path d="M2.5,12c0,1.14,1.93,2.18,5,2.69" />
        <path d="M20.5,9.3v-4.3" />
        <path d="M2.5,5v14c0,1.33,2.63,2.51,6.47,2.88" />
        <path d="M11.5,12v4h4" />
        <path d="M12.5,20c1.66,2.21,4.79,2.66,7,1,1.26-.94,2-2.43,2-4,0-2.49-2.01-4.5-4.5-4.5-1.33,0-2.54.54-3.41,1.41l-2.09,2.09" />
      </svg>
    );
  },
);

export default DatabaseBackup;
