import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Purse01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M15.99,3.87c.07-.75-.09-1.88-1.23-1.88-1.42,0-4.93,5-7.76,5"/>
  <path  d="M8.01,3.87c-.08-.75.11-1.88,1.38-1.88,1.6,0,5.42,5,8.6,5"/>
  <path  d="M21.86,15c-.45-2.07-2.39-4.5-1.69-6.62.23-.68-.29-1.38-1.01-1.38H4.83c-.72,0-1.23.7-1,1.38.71,2.12-1.24,4.56-1.69,6.62-.62,2.84.88,5.79,3.75,6.39,3.87.81,8.35.81,12.23,0,2.87-.6,4.37-3.55,3.75-6.39Z"/>
  <line  x1="3.97" y1="9.5" x2="20.03" y2="9.5"/>
</svg>
    );
  },
);

export default Purse01;
