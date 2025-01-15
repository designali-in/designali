import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileClock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17,22h2c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v3" />
        <path d="M15,2v4c0,1.1.9,2,2,2h4" />
        <circle cx="9" cy="16" r="6" />
        <path d="M10.5,17.5l-1.5-1.25v-2.25" />
      </svg>
    );
  },
);

export default FileClock;
