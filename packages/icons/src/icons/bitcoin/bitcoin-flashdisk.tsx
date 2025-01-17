import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinFlashdisk = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
 <path  d="M10.51,22c-.93,0-1.4,0-1.78-.08-1.59-.32-2.83-1.56-3.15-3.14-.08-.39-.08-.85-.08-1.78v-5.5c0-1.89,0-2.83.59-3.41.59-.59,1.53-.59,3.42-.59h2c1.89,0,2.83,0,3.42.59.4.4.53.98.57,1.91"/>
  <path  d="M13.62,20.5v-6M15.5,14.5v-1.5M15.5,22v-1.5M13.62,17.5h3.75M17.38,17.5c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M17.38,17.5c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <line  x1="10" y1="4.75" x2="11" y2="4.75"/>
  <path  d="M7.12,7.5v-3.65c0-.96.76-1.74,1.7-1.74h3.22c.94,0,1.7.78,1.7,1.74v3.65"/>
</svg>
    );
  },
);

export default BitcoinFlashdisk;
