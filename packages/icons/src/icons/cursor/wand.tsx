import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Wand = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M14.63,4.11v-2.11"/>
  <path  d="M14.63,16.74v-2.11"/>
  <path  d="M7.26,9.37h2.11"/>
  <path  d="M19.89,9.37h2.11"/>
  <path  d="M17.58,12.32l1.26,1.26"/>
  <path  d="M14.63,9.37h.01"/>
  <path  d="M17.58,6.42l1.26-1.26"/>
  <path  d="M2,22l9.47-9.47"/>
  <path  d="M11.68,6.42l-1.26-1.26"/>
</svg>
    );
  },
);

export default Wand;
