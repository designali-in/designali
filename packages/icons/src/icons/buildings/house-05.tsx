import * as React from "react";

import type { DesignaliProps } from "../../types";

export const House05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <line  x1="2.88" y1="22" x2="21.12" y2="22"/>
  
    <path  d="M4,11h16v11H4v-11Z"/>
    <path  d="M2,9.72c0-.58.27-1.04.82-1.22l8.11-2.71c.86-.29,1.07-.76,1.07-1.6,0-.76-.12-2.27,1.06-2.18.28.02.62.28,1.3.81l7.08,5.52c.4.31.56.68.56,1.2,0,.94-.4,1.47-1.32,1.47H3.15c-.74,0-1.15-.54-1.15-1.28Z"/>
    <path  d="M6.42,13.94h1.5"/>
    <path  d="M16.22,13.94h1.5"/>
    <path  d="M9,21.89v-5h6v5"/>
    <path  d="M5.13,4.26v3.55"/>
 
</svg>
    );
  },
);

export default House05;
