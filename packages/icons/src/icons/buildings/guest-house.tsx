import * as React from "react";

import type { DesignaliProps } from "../../types";

export const GuestHouse = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M4,5v14h16V3"/>
  <path  d="M3,5l7.74-2.74c1.25-.35,1.28-.35,2.53,0l7.74,2.74"/>
  <path  d="M12.01,8h-.01"/>
  <line  x1="7.44" y1="22" x2="16.56" y2="22"/>
</svg>
    );
  },
);

export default GuestHouse;
