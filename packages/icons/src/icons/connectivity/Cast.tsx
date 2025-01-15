import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cast = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M2,8v-2c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v12c0,1.1-.9,2-2,2h-6"/>
  <path  d="M2,12c4.22.45,7.55,3.78,8,8"/>
  <path  d="M2,16c2.03.38,3.62,1.97,4,4"/>
  <line  x1="2" y1="20" x2="2.01" y2="20"/>
</svg>
    );
  },
);

export default Cast;
