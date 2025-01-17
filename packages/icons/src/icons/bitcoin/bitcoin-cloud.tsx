import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinCloud = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10.12,18.81v-6M12,12.81v-1.5M12,20.31v-1.5M10.12,15.81h3.75M13.88,15.81c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M13.88,15.81c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <path  d="M4,15.59c-2.7-2.76-2.66-7.19.11-9.9,2.76-2.7,7.19-2.66,9.9.11.79.81,1.38,1.81,1.7,2.89h1.79c2.49,0,4.5,2.01,4.5,4.5,0,1.5-.75,2.91-2,3.74"/>
</svg>
    );
  },
);

export default BitcoinCloud;
