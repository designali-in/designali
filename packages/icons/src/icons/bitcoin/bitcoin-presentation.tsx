import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinPresentation = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M3,5v8c0,2.83,0,4.24.88,5.12s2.29.88,5.12.88h6c2.83,0,4.24,0,5.12-.88s.88-2.29.88-5.12V5"/>
  <path  d="M6.94,14.67v-5.33M8.5,9.33v-1.33M8.5,16v-1.33M6.94,12h3.12M10.06,12c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M10.06,12c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <line  x1="14" y1="14.39" x2="18" y2="14.39"/>
  <line  x1="14" y1="11" x2="16.26" y2="11"/>
  <rect  x="2" y="2" width="20" height="3" rx=".78" ry=".78"/>
  <line  x1="12" y1="19" x2="12" y2="22"/>
</svg>
    );
  },
);

export default BitcoinPresentation;
