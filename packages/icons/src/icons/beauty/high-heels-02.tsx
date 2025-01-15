import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HighHeels02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M20.94,20c-.24-.44-.39-1.23-.17-2.02.3-1.03.44-1.32-.49-1.87l-1.39-.81c-.88-.51-1.06-.36-1.7.41-.78.95-2.18,2.04-4.19,2.51"/>
  <path  d="M2,12h1c2.45,0,3.68,0,4.74.53,1.06.53,1.79,1.51,3.26,3.47,2.98,3.97,6.47,4,11,4"/>
  <path  d="M2,12l1.47,7.84c.02.09.1.16.2.16h.63c.11,0,.2-.09.2-.2.03-1.05.27-5.97,2.5-7.3"/>
  <path  d="M2,3.59h6.23c.83,0,1.5.67,1.5,1.5v.41c0,.83-.67,1.5-1.5,1.5H2v-3.41h0Z"/>
  <line  x1="2" y1="7" x2="2" y2="12"/>
</svg>
    );
  },
);

export default HighHeels02;
