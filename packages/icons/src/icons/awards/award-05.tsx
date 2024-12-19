import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Award05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({  ...props }, forwardedRef) => {
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
        <path  d="M4.5,9.5c0,4.14,3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5-3.36-7.5-7.5-7.5-7.5,3.36-7.5,7.5Z"/>
  <path  d="M9,10.17s.75,0,1.5,1.33c0,0,2.38-3.33,4.5-4"/>
  <path  d="M16.88,15l.67,3.21c.43,2.06.65,3.09.2,3.58-.44.49-1.21.07-2.75-.77l-2.27-1.24c-.36-.2-.54-.3-.74-.3s-.37.1-.74.3l-2.27,1.24c-1.54.84-2.3,1.26-2.75.77-.44-.49-.23-1.52.2-3.58l.67-3.21"/>
</svg>
    );
  },
);

export default Award05;
