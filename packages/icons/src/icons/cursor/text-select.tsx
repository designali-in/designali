import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TextSelect = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M4.22,2c-1.23,0-2.22.99-2.22,2.22"/>
  <path  d="M19.78,2c1.23,0,2.22.99,2.22,2.22"/>
  <path  d="M22,19.78c0,1.23-.99,2.22-2.22,2.22"/>
  <path  d="M4.22,22c-1.23,0-2.22-.99-2.22-2.22"/>
  <path  d="M8.67,2h1.11"/>
  <path  d="M8.67,22h1.11"/>
  <path  d="M14.22,2h1.11"/>
  <path  d="M14.22,22h1.11"/>
  <path  d="M2,8.67v1.11"/>
  <path  d="M22,8.67v1.11"/>
  <path  d="M2,14.22v1.11"/>
  <path  d="M22,14.22v1.11"/>
  <line  x1="6.44" y1="7.56" x2="15.33" y2="7.56"/>
  <line  x1="6.44" y1="12" x2="17.56" y2="12"/>
  <line  x1="6.44" y1="16.44" x2="13.11" y2="16.44"/>
</svg>
    );
  },
);

export default TextSelect;
