import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinCpu = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M10.12,15v-6M12,9v-1.5M12,16.5v-1.5M10.12,12h3.75M13.88,12c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M13.88,12c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <path  d="M8,2v2M16,2v2M12,2v2M8,20v2M12,20v2M16,20v2M22,16h-2M4,8h-2M4,16h-2M4,12h-2M22,8h-2M22,12h-2"/>
  <rect  x="4.04" y="4.04" width="15.92" height="15.92" rx="3.28" ry="3.28"/>
</svg>
    );
  },
);

export default BitcoinCpu;
