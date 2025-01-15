import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Ampersand = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M18.88,12c0,5.5-4.5,10-10,10-3.11,0-5.62-2.52-5.62-5.62,0-7.5,10-5,10-10.62,0-2.07-1.68-3.75-3.75-3.75s-3.75,1.68-3.75,3.75c0,3.75,3.12,10.62,15,16.25"/>
  <path  d="M17,12h3.75"/>
</svg>
    );
  },
);

export default Ampersand;
