import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MedalFirstPlace = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M2,16.44l4.44,4.44,4.44-4.44"/>
  <path  d="M6.44,20.89V3.11"/>
  <path  d="M10.89,3.11h4.44"/>
  <path  d="M10.89,7.56h7.78"/>
  <path  d="M10.89,12h11.11"/>
</svg>
    );
  },
);

export default MedalFirstPlace;
