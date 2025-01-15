import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Confused = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line  x1="8.13" y1="16.01" x2="15.87" y2="13.99"/>
  <line  x1="9" y1="9" x2="9.01" y2="9"/>
  <line  x1="15" y1="9" x2="15.01" y2="9"/>
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default Confused;
