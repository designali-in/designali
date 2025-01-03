import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SchoolBell01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M21.5,13.01c0,5.1-4.39,8.59-10,8.97-.46.03-.68.05-.84-.1-.16-.15-.16-.39-.16-.86v-3"/>
 
    <circle cx="10.5" cy="10.01" r="1.96"/>
    <circle cx="18.94" cy="12.8" r="2.56"/>
    <path  d="M10.49,18.98c-4.69,0-8.49-3.8-8.49-8.49S5.8,2,10.49,2c3.78,0,6.98,2.47,8.08,5.88"/>

</svg>
    );
  },
);

export default SchoolBell01;
