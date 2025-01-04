import * as React from "react";

import type { DesignaliProps } from "../../types";

export const PointerOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M10.08,4.5v-.5c0-1.1-.89-2-1.99-2-.14,0-.27.01-.41.04"/>
  <path  d="M13.95,8.4c-.19-.61-.65-1.09-1.25-1.29"/>
  <path  d="M21.7,16.19c.2-.72.3-1.46.3-2.2v-3c0-1.1-.89-2-1.99-2s-1.99.89-1.99,2v-1c0-1.1-.89-2-1.99-2-.64,0-1.25.31-1.62.84"/>
  <path  d="M7.09,14.99l-1.79-1.8c-.82-.73-2.08-.66-2.81.17-.68.77-.67,1.93.03,2.69l3.57,3.64c1.56,1.6,3.74,2.44,5.96,2.3h1.99c2.11,0,4.13-.84,5.62-2.34"/>
  <path  d="M6.1,6v7.99"/>
  <path  d="M2.13,2l19.87,19.99"/>
</svg>
    );
  },
);

export default PointerOff;
