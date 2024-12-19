import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Medal03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
       <path  d="M10.53,13.64c.72-.43,1.08-.64,1.47-.64s.75.21,1.47.64l1,.59c.75.44,1.12.66,1.32,1.03.21.37.21.82.21,1.72v1.04c0,.9,0,1.35-.21,1.72-.21.37-.58.59-1.32,1.03l-1,.59c-.72.43-1.08.64-1.47.64s-.75-.21-1.47-.64l-1-.59c-.75-.44-1.12-.66-1.32-1.03-.21-.37-.21-.82-.21-1.72v-1.04c0-.9,0-1.35.21-1.72.21-.37.58-.59,1.32-1.03l1-.59Z"/>
  <path  d="M17.26,2.01H6.74c-.81,0-1.88-.16-2.44.68-.31.46-.31,1.14-.31,2.48,0,1.15,0,1.72.21,2.2.35.83,1.14,1.18,1.81,1.57l3.3,1.9c1.32.76,1.98,1.14,2.68,1.14s1.37-.38,2.68-1.14l3.3-1.9c.67-.39,1.46-.75,1.81-1.57.21-.48.21-1.06.21-2.2,0-1.35,0-2.02-.31-2.48-.55-.84-1.63-.68-2.44-.68Z"/>
  <path  d="M12,2v5"/>
</svg>
    );
  },
);

export default Medal03;
