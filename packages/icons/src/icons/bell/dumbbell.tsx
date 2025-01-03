import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dumbbell = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M6,12h1.53c.31,0,.62-.08.9-.2,2.38-1.06,4.76-1.06,7.15,0,.28.13.59.2.9.2h1.53"/>
  <line  x1="6" y1="7.82" x2="6" y2="16.18"/>
  <line  x1="18" y1="7.82" x2="18" y2="16.18"/>
  <line  x1="20.32" y1="9.65" x2="20.32" y2="14.35"/>
  <line  x1="3.68" y1="9.65" x2="3.68" y2="14.35"/>
  <line  x1="3.68" y1="12" x2="2" y2="12"/>
  <line  x1="22" y1="12" x2="20.32" y2="12"/>
</svg>
    );
  },
);

export default Dumbbell;
