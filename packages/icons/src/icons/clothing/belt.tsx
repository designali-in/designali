import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Belt = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <circle  cx="19.39" cy="12" r=".05"/>
    <path  d="M9.53,17.97c3.49-.44,7.02-1.63,7.02-5.97s-3.54-5.52-7.02-5.97c-2.35-.3-2.98,1.39-2.98,3.38v5.18c0,1.99.62,3.68,2.98,3.38Z"/>
    <line  x1="4.56" y1="12" x2="11.11" y2="12"/>
  
  <polyline  points="2 6 11.56 6 22 6"/>
  <polyline  points="2 18 11.56 18 22 18"/>
</svg>
    );
  },
);

export default Belt;
