import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinLocation = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M18,18.27c1.24.4,2,.92,2,1.49,0,1.24-3.58,2.25-8,2.25s-8-1.01-8-2.25c0-.57.76-1.09,2-1.49"/>
  <path  d="M10.44,11.67v-5.33M12,6.33v-1.33M12,13v-1.33M10.44,9h3.12M13.56,9c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,9c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M19,9c0,4.37-4.85,8.92-6.47,10.32-.31.23-.74.23-1.05,0-1.63-1.41-6.47-5.96-6.47-10.32,0-3.87,3.13-7,7-7s7,3.13,7,7"/>
</svg>
    );
  },
);

export default BitcoinLocation;
