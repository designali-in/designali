import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Power = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11.97,2.02v10" />
        <path d="M18.37,6.62c3.51,3.52,3.51,9.21,0,12.73-3.52,3.51-9.21,3.51-12.73,0-3.5-3.5-3.52-9.16-.04-12.69" />
      </svg>
    );
  },
);

export default Power;
