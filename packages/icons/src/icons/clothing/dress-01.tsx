import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M7.61,2.15l.19-.04c.49-.1.73-.15.89-.07.16.08.29.4.56,1.02.48,1.12,1.58,1.9,2.75,1.9s2.28-.79,2.75-1.9c.27-.62.4-.94.56-1.02.16-.08.4-.03.89.07l.19.04c1.26.23,1.28.24,2.14,1.24.73.85,1.78,1.71,2.3,2.73.38.75.06,1.4-.37,1.99-.54.75-1.24,1.46-2.18.88-.6-.37-1.09-1.15-1.55-1.69,0,0,.28,3.62-.72,4.62.91.65,2.34,1.93,3.48,4.53.41.93.95,1.99.41,2.98-1.83,3.37-13.92,3.44-15.79,0-.54-.99,0-2.05.41-2.98,1.14-2.61,2.57-3.88,3.48-4.53-1-1.01-.72-4.62-.72-4.62-.47.54-.95,1.32-1.55,1.69-.95.58-1.65-.14-2.18-.88-.43-.6-.76-1.24-.37-1.99.52-1.02,1.57-1.89,2.3-2.73.86-1,.88-1.01,2.14-1.24Z"/>
  <line  x1="8" y1="12" x2="16" y2="12"/>
</svg>
    );
  },
);

export default Dress01;
