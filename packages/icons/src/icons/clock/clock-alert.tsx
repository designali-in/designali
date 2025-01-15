import * as React from "react";

import type { DesignaliProps } from "../../types";

export const ClockAlert = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12.5,6v6l4,2" />
        <path d="M16.5,21.16c-5.06,2.21-10.95-.1-13.16-5.16s.1-10.95,5.16-13.16c4.92-2.15,10.67-.03,13,4.81" />
        <path d="M20.5,11.5v6" />
        <path d="M20.5,21.5h0" />
      </svg>
    );
  },
);

export default ClockAlert;
