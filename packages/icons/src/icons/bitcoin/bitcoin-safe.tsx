import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinSafe = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M7,15c-1-.53-1-1.39-1-3.09v-1.81c0-1.71,0-2.56,1-3.09"/>
  <path  d="M12.94,13.67v-5.33M14.5,8.33v-1.33M14.5,15v-1.33M12.94,11h3.12M16.06,11c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M16.06,11c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <rect  x="2" y="2" width="20" height="18" rx="3.08" ry="3.08"/>
 
    <line  x1="7.61" y1="20" x2="7.61" y2="22"/>
    <line  x1="16.39" y1="20" x2="16.39" y2="22"/>
  
</svg>
    );
  },
);

export default BitcoinSafe;
