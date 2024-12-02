import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiPhone02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path
          fill="none"
          d="M20.25,6.75l-2.25,2.25h-2M19.5,6.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"
        />
        <path
          fill="none"
          d="M20.25,17.25l-2.25-2.25h-2M19.5,17.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75Z"
        />
        <path
          fill="none"
          d="M20.25,12h-8.25M19.5,12c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"
        />
        <path
          fill="none"
          d="M18.96,20.4c-.19.91-.99,1.6-1.96,1.6H7c-1.1,0-2-.9-2-2V4c0-1.1.9-2,2-2h10c.94,0,1.73.65,1.94,1.52"
        />
        <path d="M12,18h.01" />
      </svg>
    );
  },
);

export default AiPhone02;
