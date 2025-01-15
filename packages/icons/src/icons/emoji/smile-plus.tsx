import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SmilePlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
 <path  d="M22,11.05v1c-.03,5.52-4.53,9.98-10.05,9.95-5.52-.03-9.98-4.53-9.95-10.05.03-5.52,4.53-9.98,10.05-9.95.32,0,.63.02.95.05"/>
  <path  d="M8,14.05s1.5,2,4,2,4-2,4-2"/>
  <line  x1="9" y1="9.05" x2="9.01" y2="9.05"/>
  <line  x1="15" y1="9.05" x2="15.01" y2="9.05"/>
  <path  d="M16,5.05h6"/>
  <path  d="M19,2.05v6"/>
</svg>
    );
  },
);

export default SmilePlus;
