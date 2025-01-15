import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Nfc = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M5.49,8.32c1.3,2.28,1.3,5.08,0,7.36" />
        <path d="M8.95,6.21c2.03,3.59,2.03,7.99,0,11.58" />
        <path d="M12.4,4.1c2.8,4.89,2.81,10.9.01,15.8" />
        <path d="M15.86,2c3.54,6.2,3.54,13.8,0,20" />
      </svg>
    );
  },
);

export default Nfc;
