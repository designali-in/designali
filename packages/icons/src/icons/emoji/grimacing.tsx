import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Grimacing = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M6.69,15c0-1.41.7-2,2-2h6c1.3,0,2,.59,2,2s-.7,2-2,2h-6c-1.3,0-2-.59-2-2Z"/>
  <circle  cx="12" cy="12" r="10"/>
  <line  x1="9" y1="9" x2="9.01" y2="9"/>
  <line  x1="15" y1="9" x2="15.01" y2="9"/>
</svg>
    );
  },
);

export default Grimacing;
