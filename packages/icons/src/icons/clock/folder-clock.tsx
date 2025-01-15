import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FolderClock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="16" cy="15.5" r="6" />
        <path d="M7,19.5h-3c-1.1,0-2-.9-2-2V4.5c0-1.1.9-2,2-2h3.9c.68,0,1.32.33,1.69.9l.81,1.2c.37.56,1,.9,1.67.9h7.93c1.1,0,2,.9,2,2" />
        <path d="M16,13.5v2l1,1" />
      </svg>
    );
  },
);

export default FolderClock;
