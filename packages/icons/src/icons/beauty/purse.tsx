import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Purse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M4,20c-1.1,0-2-.9-2-2s.9-2,2-2,2,1.33,2,2-.9,2-2,2Z"/>
  <path  d="M8,20c-1.1,0-2-1.5-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>
  <path  d="M13,20h3c2.83,0,4.24,0,5.12-.88s.88-2.29.88-5.12v-1c0-2.83,0-4.24-.88-5.12-.64-.64-1.57-.81-3.12-.86M10,7h6c.76,0,1.42,0,2,.02M18,7.02c0-.95,0-1.42-.16-1.8-.2-.48-.58-.86-1.06-1.06-.37-.16-.85-.16-1.8-.16h-4.98c-3.77,0-5.66,0-6.83,1.17-1.17,1.17-1.17,2.06-1.17,5.83v2"/>
  <circle  cx="16.88" cy="13.51" r="2.88"/>
</svg>
    );
  },
);

export default Purse;
