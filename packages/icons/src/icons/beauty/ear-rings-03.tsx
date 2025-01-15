import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EarRings03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M13,7H3"/>
  <path  d="M21,17h-10"/>
  <path  d="M5,4.5c.28-1.57,3,.92,3,2.5s-2.72,4.07-3,2.5"/>
  <path  d="M19,14.5c-.28-1.57-3,.92-3,2.5s2.72,4.07,3,2.5"/>
  <circle  cx="17.5" cy="6.5" r="4.5"/>
  <circle  cx="6.5" cy="17.5" r="4.5"/>
</svg>
    );
  },
);

export default EarRings03;
