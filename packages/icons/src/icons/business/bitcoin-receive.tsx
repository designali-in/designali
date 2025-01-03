import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinReceive = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M6.81,17.89c4.01.71,4.99-4.9.99-5.61M6.81,17.89l-4.81-.85M6.81,17.89l-.28,1.6M7.8,12.28c4.01.71,4.99-4.9.99-5.61M7.8,12.28l-3.21-.56M8.78,6.67l-4.81-.85M8.78,6.67l.28-1.6M3.32,18.93l2.54-14.42"/>
  
    <path  d="M13.66,12h8.34"/>
    <path  d="M17.83,16.17l-4.17-4.17,4.17-4.17"/>
  
</svg>
    );
  },
);

export default BitcoinReceive;
