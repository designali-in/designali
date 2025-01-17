import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinEllipse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M9.5,16v-8"/>
  <path  d="M11,8v-2M13.5,8v-2"/>
  <path  d="M11,18v-2M13.5,18v-2"/>
  <path  d="M9.5,12h5c.83,0,1.5.67,1.5,1.5v1c0,.83-.67,1.5-1.5,1.5h-6.5"/>
  <path  d="M8,8h6.5c.83,0,1.5.67,1.5,1.5v1c0,.83-.67,1.5-1.5,1.5h-5"/>
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default BitcoinEllipse