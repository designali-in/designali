import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinDatabase = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M12,15c-4.42,0-8-1.34-8-3"/>
  <path  d="M15.94,20.67v-5.33M17.5,15.33v-1.33M17.5,22v-1.33M15.94,18h3.12M19.06,18c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M19.06,18c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M20,12v-7M12,22c-4.42,0-8-1.34-8-3V5"/>
  <ellipse  cx="12" cy="4.94" rx="8" ry="2.94"/>
</svg>
    );
  },
);

export default BitcoinDatabase;
