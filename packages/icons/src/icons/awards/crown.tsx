import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Crown = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3.52,10.31c-.39-1.07-.58-1.61-.5-1.96.09-.38.36-.67.7-.77.31-.09.8.13,1.77.56.86.38,1.29.57,1.7.56.45-.01.87-.19,1.21-.51.31-.29.52-.74.93-1.66l.91-2.02c.76-1.68,1.15-2.53,1.75-2.53s.99.84,1.75,2.53l.91,2.02c.42.91.62,1.37.93,1.66.34.32.77.49,1.21.51.4.01.83-.18,1.7-.56.97-.43,1.46-.65,1.77-.56.34.1.61.39.7.77.08.34-.11.88-.5,1.96l-1.67,4.62c-.71,1.97-1.07,2.96-1.82,3.52-.75.56-1.71.56-3.64.56h-2.71c-1.93,0-2.89,0-3.64-.56-.75-.56-1.1-1.55-1.82-3.52l-1.67-4.62Z" />
        <path d="M12,14h0" />
        <path d="M7,22h10" />
      </svg>
    );
  },
);

export default Crown;
