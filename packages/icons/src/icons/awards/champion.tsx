import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Champion = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M12,17c-1.67,0-3.13,1.26-3.88,3.13-.36.89.16,1.87.84,1.87h6.08c.68,0,1.2-.98.84-1.87-.75-1.87-2.21-3.13-3.88-3.13Z"/>
  <path  d="M18.5,5h1.2c1.2,0,1.8,0,2.11.38.31.38.18.94-.08,2.08l-.39,1.7c-.59,2.56-2.74,4.46-5.35,4.85"/>
  <path  d="M5.5,5h-1.2c-1.2,0-1.8,0-2.11.38-.31.38-.18.94.08,2.08l.39,1.7c.59,2.56,2.74,4.46,5.35,4.85"/>
  <path  d="M12,17c3.02,0,5.57-4.66,6.33-11.01.21-1.76.32-2.63-.24-3.31-.56-.68-1.46-.68-3.27-.68h-5.63c-1.81,0-2.71,0-3.27.68-.56.68-.45,1.56-.24,3.31.76,6.35,3.31,11.01,6.33,11.01Z"/>
</svg>
    );
  },
);

export default Champion;
