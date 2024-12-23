import * as React from "react";

import type { DesignaliProps } from "../../types";

export const House02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M21.47,10v12"/>
  <path  d="M21.47,22H2.53"/>
  
    <path  d="M2,10h6.13c.24,0,.47-.1.65-.27l2.57-2.46c.37-.36.93-.36,1.3,0l2.57,2.46c.18.17.41.27.65.27h6.13"/>
    <path  d="M3,10l1.96-4.58c.86-2.01,1.49-2.42,3.68-2.42h6.72c2.19,0,2.82.41,3.68,2.42l1.96,4.58"/>
    <path  d="M12.01,11h0"/>
    <path  d="M2.53,10v12"/>
    <path  d="M9,22v-5h6v5"/>
    <path  d="M5.94,13.23h1.5"/>
    <path  d="M16.01,13.23h1.5"/>
  
</svg>
    );
  },
);

export default House02;
