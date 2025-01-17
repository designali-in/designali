import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinRectangle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M9.37,16.21V7.79"/>
  <path  d="M10.95,7.79v-2.11M13.58,7.79v-2.11"/>
  <path  d="M10.95,18.32v-2.11M13.58,18.32v-2.11"/>
  <path  d="M9.37,12h5.26c.87,0,1.58.71,1.58,1.58v1.05c0,.87-.71,1.58-1.58,1.58h-6.84"/>
  <path  d="M7.79,7.79h6.84c.87,0,1.58.71,1.58,1.58v1.05c0,.87-.71,1.58-1.58,1.58h-5.26"/>
  <rect  x="2" y="2" width="20" height="20" rx="2.16" ry="2.16"/>
</svg>
    );
  },
);

export default BitcoinRectangle;
