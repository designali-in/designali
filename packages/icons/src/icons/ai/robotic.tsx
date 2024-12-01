import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Robotic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19,16v-2c0-2.83,0-4.24-.88-5.12s-2.29-.88-5.12-.88h-2c-2.83,0-4.24,0-5.12.88-.88.88-.88,2.29-.88,5.12v2c0,2.83,0,4.24.88,5.12.88.88,2.29.88,5.12.88h2c2.83,0,4.24,0,5.12-.88s.88-2.29.88-5.12Z" />
        <path d="M19,18c1.41,0,2.12,0,2.56-.44.44-.44.44-1.15.44-2.56s0-2.12-.44-2.56c-.44-.44-1.15-.44-2.56-.44" />
        <path d="M5,18c-1.41,0-2.12,0-2.56-.44-.44-.44-.44-1.15-.44-2.56s0-2.12.44-2.56c.44-.44,1.15-.44,2.56-.44" />
        <path d="M13.5,3.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5.67-1.5,1.5-1.5,1.5.67,1.5,1.5Z" />
        <path d="M12,5v3" />
        <path d="M9,13v1" />
        <path d="M15,13v1" />
        <path d="M10,17.5s.67.5,2,.5,2-.5,2-.5" />
      </svg>
    );
  },
);

export default Robotic;
