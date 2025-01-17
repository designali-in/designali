import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10.44,18.17v-5.33M12,12.83v-1.33M12,19.5v-1.33M10.44,15.5h3.12M13.56,15.5c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,15.5c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M5,9.19h14c1.1,0,2,1.04,2,2.33v8.15c0,1.29-.9,2.33-2,2.33H5c-1.1,0-2-1.04-2-2.33v-8.15c0-1.29.9-2.33,2-2.33Z"/>
  <path  d="M7,9.19v-3.2c0-2.21,2.24-4,5-4s5,1.79,5,4v3.2"/>
</svg>
    );
  },
);

export default BitcoinLock;
