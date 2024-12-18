import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Access01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13,14h6c.93,0,1.4,0,1.77.15.49.2.88.59,1.08,1.08.15.37.15.83.15,1.77s0,1.4-.15,1.77c-.2.49-.59.88-1.08,1.08-.37.15-.83.15-1.77.15h-6" />
        <path d="M15,5h4c.93,0,1.4,0,1.77.15.49.2.88.59,1.08,1.08.15.37.15.83.15,1.77s0,1.4-.15,1.77c-.2.49-.59.88-1.08,1.08-.37.15-.83.15-1.77.15h-4" />
        <path d="M4.92,19.43c0,.42.17.82.46,1.12l1.22,1.22c.31.31.81.31,1.12,0l1.68-1.68c.31-.31.31-.81,0-1.12l-.56-.56c-.31-.31-.31-.81,0-1.12l.56-.56c.31-.31.31-.81,0-1.12l-.56-.56c-.31-.31-.31-.81,0-1.12l.1-.1c.3-.3.46-.7.46-1.12v-.91c2.56-1.24,3.64-4.32,2.4-6.88-1.24-2.56-4.32-3.64-6.88-2.4-2.56,1.24-3.64,4.32-2.4,6.88.51,1.05,1.35,1.89,2.4,2.4v7.64Z" />
        <circle cx="7.16" cy="7" r=".4" />
      </svg>
    );
  },
);

export default Access01;
