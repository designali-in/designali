import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Mirror = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <line  x1="3.62" y1="22" x2="20.9" y2="22"/>
  <line  x1="12.34" y1="6.68" x2="9.82" y2="9.21"/>
  <line  x1="10.1" y1="5.56" x2="8.79" y2="6.87"/>
  <path  d="M11.78,2h.44c3.31,0,6,2.69,6,6v10.84H5.78V8c0-3.31,2.69-6,6-6Z"/>
</svg>
    );
  },
);

export default Mirror;
