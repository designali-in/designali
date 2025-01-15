import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Angel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7,10.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5M14,10.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5" />
        <ellipse cx="12" cy="4" rx="10" ry="2" />
        <path d="M20.97,7.5c.68,1.35,1.06,2.88,1.06,4.5,0,5.54-4.49,10.04-10.04,10.04S1.96,17.54,1.96,12c0-1.62.38-3.15,1.06-4.5" />
        <path d="M8.02,16.09c2.2,2.2,5.77,2.2,7.97,0" />
      </svg>
    );
  },
);

export default Angel;
