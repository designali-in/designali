import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinSmartphone02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M10.44,12.67v-5.33M12,7.33v-1.33M12,14v-1.33M10.44,10h3.12M13.56,10c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,10c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle  cx="12" cy="19.24" r=".02"/>
  <rect  x="5" y="2" width="14" height="20" rx="3.56" ry="3.56"/>
</svg>
    );
  },
);

export default BitcoinSmartphone02;
