import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HairClips = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M9.35,12.39c-1,2.05,3.21,3.7,1.65,5.67-1.51,1.39-3.15-2.38-6.5-2.5"/>
  <path  d="M5,20.06c2,0,3-2,3-2M10.71,15.36c2.13-3.02,4.57-5.29,10.29-5.29"/>
  <path  d="M2,15.29c1.18.25,2.92.43,4.61-.34,3.24-1.47,3.31-5.03,6.06-7.77,1.52-1.52,4.21-3.13,9.33-3.25"/>
</svg>
    );
  },
);

export default HairClips;
