import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Crazy = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.05,10c0,.5-.68,1-1.5,1s-1.5-.45-1.5-1" />
        <path d="M17.05,10c0-1.66-.67-3-1.5-3s-1.5,1.34-1.5,3" />
        <path d="M16.69,13.5c.48.65.55,1.64-.18,2.32-1.46,1.35-3.3-.12-4.24-.15-.94-.03-1.44.88-3.34,1.29-1.15.24-1.86-.46-1.86-1.29" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default Crazy;
