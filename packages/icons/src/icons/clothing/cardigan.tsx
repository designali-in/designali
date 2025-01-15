import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Cardigan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M6.5,16l-1.5,5h-3l.89-13.28c.07-1.06.7-2.01,1.65-2.48l4.46-2.23c1.42,1.59,4.58,1.59,6,0l4.46,2.23c.95.48,1.58,1.42,1.65,2.48l.89,13.28h-3l-1.5-5"/>
  <path  d="M6,9l1,10,1,2h8l1-2,1-10"/>
  <path  d="M12,21v-11.25c0-.45-.3-.83-.71-1.02-2.79-1.36-2.79-5.23-2.79-5.23"/>
  <path  d="M15.5,3.5s0,4.5-3.5,5.5"/>
</svg>
    );
  },
);

export default Cardigan;
