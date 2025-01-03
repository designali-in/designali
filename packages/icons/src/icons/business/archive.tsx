import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Archive = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect  x="2" y="2" width="20" height="20" rx="4.33" ry="4.33"/>
  <line  x1="2" y1="12" x2="22" y2="12"/>
  <line  x1="6.66" y1="7.24" x2="17.34" y2="7.24"/>
  <line  x1="6.66" y1="16.76" x2="17.34" y2="16.76"/>
</svg>
    );
  },
);

export default Archive;
