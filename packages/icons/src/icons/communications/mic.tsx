import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Mic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2c-1.66,0-3,1.34-3,3v7c0,1.66,1.34,3,3,3s3-1.34,3-3v-7c0-1.66-1.34-3-3-3Z" />
        <path d="M19,10v2c0,3.87-3.13,7-7,7s-7-3.13-7-7v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    );
  },
);

export default Mic;
