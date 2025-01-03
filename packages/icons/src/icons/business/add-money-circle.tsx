import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AddMoneyCircle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <line  x1="18.34" y1="2" x2="18.34" y2="9.32"/>
    <line  x1="14.68" y1="5.84" x2="22" y2="5.84"/>
  
  <path  d="M20,12.98c0,4.97-4.03,9-9,9S2,17.95,2,12.98,6.03,3.98,11,3.98"/>

    <path  d="M15.68,9.1h-5.52c-1.02,0-1.84.82-1.84,1.84s.82,1.84,1.84,1.84h3.68c1.02,0,1.84.82,1.84,1.84s-.82,1.84-1.84,1.84h-5.52"/>
    <path  d="M12,18.31V7.26"/>
  
</svg>
    );
  },
);

export default AddMoneyCircle;
