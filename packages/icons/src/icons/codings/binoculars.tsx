import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Binoculars = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10,10h4" />
        <path d="M19,7v-3c0-.55-.45-1-1-1h-2c-.55,0-1,.45-1,1v3" />
        <path d="M20,21c1.1,0,2-.9,2-2v-3.85c0-1.39-2-2.96-2-4.83v-2.32c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v11c0,1.1.9,2,2,2h4Z" />
        <path d="M22,16H2" />
        <path d="M4,21c-1.1,0-2-.9-2-2v-3.85c0-1.39,2-2.96,2-4.83v-2.32c0-.55.45-1,1-1h4c.55,0,1,.45,1,1v11c0,1.1-.9,2-2,2h-4Z" />
        <path d="M9,7v-3c0-.55-.45-1-1-1h-2c-.55,0-1,.45-1,1v3" />
      </svg>
    );
  },
);

export default Binoculars;
