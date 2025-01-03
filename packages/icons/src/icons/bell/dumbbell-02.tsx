import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dumbbell02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M21.43,2.57l-1.39,1.39"/>
  <path  d="M3.96,20.04l-1.39,1.39"/>
  
    <path  d="M13.44,8.68l-4.77,4.77"/>
    <path  d="M15.33,10.53l-4.79,4.79"/>
    <path  d="M2.58,18.61c-.78-.78-.78-2.03,0-2.81.78-.78,2.03-.78,2.81,0l-1.76-1.75h0c-.78-.78-.78-2.03,0-2.81s2.03-.78,2.81,0l6.32,6.32c.78.78.78,2.03,0,2.81s-2.03.78-2.81,0l-1.75-1.76c.78.78.78,2.03,0,2.81-.78.78-2.03.78-2.81,0l-2.81-2.81Z"/>
    <path  d="M11.24,6.44h0c-.78-.78-.78-2.03,0-2.81.78-.78,2.03-.78,2.81,0l1.75,1.76h0c-.78-.78-.78-2.03,0-2.81.78-.78,2.03-.78,2.81,0l2.81,2.81c.78.78.78,2.03,0,2.81-.78.78-2.03.78-2.81,0l1.76,1.75c.78.78.78,2.03,0,2.81s-2.03.78-2.81,0l-6.32-6.32Z"/>

</svg>
    );
  },
);

export default Dumbbell02;
