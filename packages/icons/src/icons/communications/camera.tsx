import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Camera = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M14.5,4h-5l-2.5,3h-3c-1.1,0-2,.9-2,2v9c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-9c0-1.1-.9-2-2-2h-3l-2.5-3Z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    );
  },
);

export default Camera;
