import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Motion02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect x="12" y="12" width="10" height="10" rx="1.98" ry="1.98" />
        <path
          fill="none"
          d="M8.58,15.32c-.98,0-1.78-.8-1.78-1.78v-4.89c0-.98.8-1.78,1.78-1.78h4.89c.98,0,1.78.8,1.78,1.78"
        />
        <path
          fill="none"
          d="M3.3,8.17c-.72,0-1.3-.58-1.3-1.3v-3.57c0-.72.58-1.3,1.3-1.3h3.57c.72,0,1.3.58,1.3,1.3"
        />
      </svg>
    );
  },
);

export default Motion02;
