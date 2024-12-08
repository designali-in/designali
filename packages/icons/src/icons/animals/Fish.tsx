import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Fish = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.46,7.26c-.26-1.38-1.29-3.02-2.46-4.26h5.8c.98,0,1.82.7,1.98,1.67l.23,1.4" />
        <path d="M7,10.67c0-2.67-1.42-4.7-4.27-5.17-1,1.5-1,5,.23,6.5-1.24,1.5-1.24,5-.23,6.5,2.85-.47,4.27-2.5,4.27-5.17" />
        <path d="M16.01,17.93l-.23,1.4c-.16.97-1,1.67-1.98,1.67h-4.3c.97-1.1,1.5-2.52,1.49-3.98" />
        <path d="M6.5,12c.94-3.46,4.94-6,8.5-6s6.06,2.54,7,6c-.94,3.47-3.44,6-7,6s-7.56-2.53-8.5-6Z" />
        <path d="M18,12v.5" />
        <path d="M16,17.93c-2.67-3.5-2.67-8.36,0-11.86" />
      </svg>
    );
  },
);

export default Fish;
