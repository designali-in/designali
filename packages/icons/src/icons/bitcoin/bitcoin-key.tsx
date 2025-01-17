import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinKey = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M15.62,19.5v-6M17.5,13.5v-1.5M17.5,21v-1.5M15.62,16.5h3.75M19.38,16.5c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M19.38,16.5c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <path  d="M4.91,19.42c0,.42.17.82.46,1.12l1.22,1.22c.31.31.81.31,1.12,0l1.68-1.68c.31-.31.31-.81,0-1.12l-.56-.56c-.31-.31-.31-.81,0-1.12l.56-.56c.31-.31.31-.81,0-1.12l-.56-.56c-.31-.31-.31-.81,0-1.12l.1-.1c.3-.3.46-.7.46-1.12v-.91c2.56-1.24,3.63-4.32,2.4-6.88-1.24-2.56-4.32-3.63-6.88-2.4-2.56,1.24-3.63,4.32-2.4,6.88.51,1.05,1.35,1.89,2.4,2.4v7.63Z"/>
  <circle  cx="7.1" cy="6.46" r=".39"/>
</svg>
    );
  },
);

export default BitcoinKey;
