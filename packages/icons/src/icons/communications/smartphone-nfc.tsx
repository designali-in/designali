import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SmartphoneNfc = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect  x="1.99" y="6" width="7" height="12" rx="1" ry="1"/>
  <path  d="M12.99,8.32c1.3,2.28,1.3,5.08,0,7.36"/>
  <path  d="M16.45,6.21c2.03,3.59,2.03,7.99,0,11.58"/>
  <path  d="M19.9,4.1c2.8,4.89,2.81,10.9.01,15.8"/>
</svg>
    );
  },
);

export default SmartphoneNfc;
