import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinSmartphone01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M17.6,5c-.14-.87-.39-1.49-.87-1.97-1.03-1.03-2.68-1.03-5.97-1.03s-4.95,0-5.97,1.03c-1.03,1.03-1.03,2.68-1.03,5.97v6c0,3.3,0,4.95,1.03,5.97,1.03,1.03,2.68,1.03,5.97,1.03s4.95,0,5.97-1.03c.48-.48.74-1.11.87-1.97"/>
  <path  d="M16.19,14.67v-5.33M17.75,9.33v-1.33M17.75,16v-1.33M16.19,12h3.12M19.31,12c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M19.31,12c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle cx="10.75" cy="19.24" r=".02"/>
  <line  x1="9.46" y1="4.69" x2="11.89" y2="4.69"/>
</svg>
    );
  },
);

export default BitcoinSmartphone01;
