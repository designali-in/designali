import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Kurta = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M6.38,16h-1.29c-1.86,0-2.24-.37-2.03-2.22l.36-3.21c.34-2.97,1.02-3.81,3.82-4.91l1.7-.66v-3c.97.32,2.03.84,3.07.84s2.09-.52,3.07-.84v3l1.7.66c2.8,1.09,3.48,1.93,3.82,4.91l.36,3.21c.21,1.85-.18,2.22-2.03,2.22h-1.29"/>
  <path  d="M9,5l2.05.68c.62.21,1.28.21,1.9,0l2.05-.68"/>
  <path  d="M6.96,10l-.46,10.96c-.04.86.14,1.04,1.01,1.04h8.98c.86,0,1.04-.18,1.01-1.04l-.46-10.96"/>
  <line  x1="12" y1="5.84" x2="12" y2="12.79"/>
  <line  x1="13.75" y1="8.34" x2="12" y2="8.34"/>
  <line  x1="13.75" y1="10.84" x2="12" y2="10.84"/>
</svg>
    );
  },
);

export default Kurta;
