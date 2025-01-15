import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Wifi = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,19.64h.01" />
        <path d="M2,8.46c5.69-5.09,14.31-5.09,20,0" />
        <path d="M5,12.5c3.89-3.81,10.11-3.81,14,0" />
        <path d="M8.5,16.07c1.94-1.91,5.06-1.91,7,0" />
      </svg>
    );
  },
);

export default Wifi;
