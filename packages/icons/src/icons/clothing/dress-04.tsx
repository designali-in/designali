import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M15,4l-3,2-3-2c-.59.51-1.93,1.29-2,2.15-.03.37.13.57.43.98.67.88,1.44,1.4,1.44,2.88h6.24c0-1.48.77-2,1.44-2.88.31-.4.46-.61.43-.98-.07-.85-1.41-1.64-2-2.15Z"/>
  <path  d="M19.86,17.81c-.7-2.69-2.5-5.16-3.68-6.57-.85-1.01-1.48-1.24-2.81-1.24h-2.74c-1.33,0-1.96.22-2.81,1.24-1.18,1.41-2.98,3.88-3.68,6.57-.43,1.64.15,2.54,1.75,3.12,1.43.52,3.55,1.07,6.11,1.07s4.68-.55,6.11-1.07c1.6-.58,2.18-1.48,1.75-3.12Z"/>
  <path  d="M14,15s2,3,2,6.5M10,15s-2,3-2,6.5"/>
  <g>
    <line  x1="9.07" y1="2" x2="9.07" y2="4"/>
    <line  x1="14.93" y1="2" x2="14.93" y2="4"/>
  </g>
</svg>
    );
  },
);

export default Dress04;
