import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ArrowDown10 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M2,17l5,5,5-5"/>
  <path  d="M7,22V2"/>
  <path  d="M19.5,9.5V2h-2.5"/>
  <path  d="M17,9.5h5"/>
  <path  d="M19.5,14.5h0c1.38,0,2.5,1.12,2.5,2.5v2.5c0,1.38-1.12,2.5-2.5,2.5h0c-1.38,0-2.5-1.12-2.5-2.5v-2.5c0-1.38,1.12-2.5,2.5-2.5Z"/>
</svg>
    );
  },
);

export default ArrowDown10;
