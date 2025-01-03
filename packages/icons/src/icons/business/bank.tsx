import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bank = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M2,8.57c0-1.2.48-1.93,1.48-2.48l4.11-2.29c2.15-1.2,3.23-1.8,4.41-1.8s2.26.6,4.41,1.8l4.11,2.29c1,.56,1.48,1.29,1.48,2.48,0,.32,0,.49-.04.62-.19.7-.82.81-1.43.81H3.47c-.61,0-1.25-.11-1.43-.81-.04-.13-.04-.3-.04-.62Z"/>
  <path  d="M19,18.5H5c-1.66,0-3,1.34-3,3,0,.28.22.5.5.5h19c.28,0,.5-.22.5-.5,0-1.66-1.34-3-3-3Z"/>
  <rect  x="4.7" y="10" width="3.66" height="8.5"/>
  <rect  x="15.78" y="10" width="3.66" height="8.5"/>
  <circle  cx="12" cy="6.63" r=".43"/>
</svg>
    );
  },
);

export default Bank;
