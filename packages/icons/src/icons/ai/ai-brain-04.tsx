import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiBrain04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8,4.5c-1.66,0-3,1.34-3,3,0,.57.16,1.1.43,1.55-1.39.27-2.43,1.48-2.43,2.95s1.05,2.68,2.43,2.95M8,4.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5v15c0,1.38-1.12,2.5-2.5,2.5s-2.5-1.12-2.5-2.5c-1.66,0-3-1.34-3-3,0-.57.16-1.1.43-1.55M8,4.5c0,.82.39,1.54,1,2M5.43,14.95c.36-.59.91-1.04,1.57-1.28" />
        <path d="M20.25,4.75l-2.25,2.25h-2M19.5,4.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z" />
        <path d="M20.25,19.25l-2.25-2.25h-2M19.5,19.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75Z" />
        <path d="M20.25,12h-4.25M19.5,12c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z" />
      </svg>
    );
  },
);

export default AiBrain04;
