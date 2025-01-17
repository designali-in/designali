import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M17.5,17.5l4.5,4.5"/>
  <path  d="M9.12,14v-6M11,8v-1.5M11,15.5v-1.5M9.12,11h3.75M12.88,11c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M12.88,11c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <circle  cx="11.08" cy="11.08" r="9.08"/>
</svg>
    );
  },
);

export default BitcoinSearch;
