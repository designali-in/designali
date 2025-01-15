import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HeadphoneOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M21,14h-1.34"/>
  <path  d="M9.13,3.47c4.71-1.59,9.82.95,11.4,5.66.31.93.47,1.9.47,2.87v3.34"/>
  <path  d="M2,2l20,20"/>
  <path  d="M20.41,20.41c-.37.38-.88.59-1.41.59h-1c-1.1,0-2-.9-2-2v-3"/>
  <path  d="M3,14h3c1.1,0,2,.9,2,2v3c0,1.1-.9,2-2,2h-1c-1.1,0-2-.9-2-2v-7c0-2.39.95-4.68,2.64-6.36"/>
</svg>
    );
  },
);

export default HeadphoneOff;
