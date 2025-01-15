import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Asterisk = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,2.01v19.97" />
        <path d="M20.65,7.01L3.35,16.99" />
        <path d="M3.35,7.01l17.3,9.99" />
      </svg>
    );
  },
);

export default Asterisk;
