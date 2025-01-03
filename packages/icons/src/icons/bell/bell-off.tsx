import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BellOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.27,21c.55.96,1.78,1.28,2.73.73.3-.18.56-.43.73-.73" />
        <path d="M17,17H4c-.55,0-1-.45-1-1,0-.25.09-.49.26-.67,1.33-1.37,2.74-2.83,2.74-7.33,0-.59.09-1.18.26-1.74" />
        <path d="M2,2l20,20" />
        <path d="M8.67,3.01c2.76-1.84,6.48-1.1,8.32,1.66.66.99,1.01,2.15,1.01,3.33,0,2.69.77,4.65,1.71,6.05" />
      </svg>
    );
  },
);

export default BellOff;
