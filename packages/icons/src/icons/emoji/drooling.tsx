import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Drooling = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16,21.17c-1.22.54-2.58.83-4,.83-5.52,0-10-4.48-10-10S6.48,2,12,2s10,4.48,10,10c0,2.43-.87,4.66-2.31,6.39" />
        <path d="M8,15c.91,1.21,2.36,2,4,2s3.09-.79,4-2" />
        <path d="M15,16c1.94.48,5.57,1.48,4.92,4.54-.34,1.51-2.09,1.79-3.05,1.11-2.3-1.64,0-3.25-1.88-5.65Z" />
        <path d="M9.5,8.5h-1.29c-.45,0-.89.18-1.21.5M14.5,8.5h1.29c.45,0,.89.18,1.21.5" />
      </svg>
    );
  },
);

export default Drooling;
