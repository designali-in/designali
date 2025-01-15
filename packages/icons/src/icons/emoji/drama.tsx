import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Drama = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.02,11.02h0" />
        <path d="M14.02,6.03h0" />
        <path d="M18.01,6.03h0" />
        <path d="M6.53,13.11h0" />
        <path d="M22,5.03c0,8.98-3.99,11.98-5.99,11.98s-5.99-2.99-5.99-11.98c0-2,2-2.99,5.99-2.99s5.99,1,5.99,2.99" />
        <path d="M17.41,9.92c-.8.8-2,.8-2.79,0" />
        <path d="M10.12,7.13c-1.1.1-2.4.6-4.09,1.5-3.49,2-4.69,3.89-3.69,5.59,4.49,7.78,9.48,8.38,11.18,7.39.9-.5,1.9-2.1,1.9-4.69" />
        <path d="M9.13,16.51c.3-1.1,1.4-1.7,2.4-1.4" />
      </svg>
    );
  },
);

export default Drama;
