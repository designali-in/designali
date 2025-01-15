import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Binary = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M17,14.5h0c1.38,0,2.5,1.12,2.5,2.5v2.5c0,1.38-1.12,2.5-2.5,2.5h0c-1.38,0-2.5-1.12-2.5-2.5v-2.5c0-1.38,1.12-2.5,2.5-2.5Z"/>
  <path  d="M7,2h0c1.38,0,2.5,1.12,2.5,2.5v2.5c0,1.38-1.12,2.5-2.5,2.5h0c-1.38,0-2.5-1.12-2.5-2.5v-2.5c0-1.38,1.12-2.5,2.5-2.5Z"/>
  <path  d="M4.5,22h5"/>
  <path  d="M14.5,9.5h5"/>
  <path  d="M4.5,14.5h2.5v7.5"/>
  <path  d="M14.5,2h2.5v7.5"/>
</svg>
    );
  },
);

export default Binary;
