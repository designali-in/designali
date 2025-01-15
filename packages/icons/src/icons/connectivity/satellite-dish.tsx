import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SatelliteDish = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M3.13,9.77c-2.26,3.87-.96,8.84,2.91,11.1,2.53,1.48,5.66,1.48,8.19,0L3.13,9.77Z"/>
  <path  d="M8.68,15.32l3.33-3.33"/>
  <path  d="M17.56,13.1c0-3.68-2.98-6.66-6.66-6.66"/>
  <path  d="M22,13.1c0-6.13-4.97-11.1-11.1-11.1"/>
</svg>
    );
  },
);

export default SatelliteDish;
