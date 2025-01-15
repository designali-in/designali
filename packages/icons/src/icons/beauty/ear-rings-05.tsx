import * as React from "react";

import type { DesignaliProps } from "../../types";

export const EarRings05 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6.78,8.3v-2.07c0-.2.13-.38.32-.45,1.11-.44,1.58-1.17,1.54-1.93-.06-1.13-1.03-1.68-1.54-1.78-.55-.11-1.98.05-2.09,1.63-.12,1.78-.62,2.08-.95,2.26" />
        <circle cx="6.93" cy="10.43" r="2.13" />
        <path d="M6.93,21.98c1.91,0,3.47-1.55,3.47-3.47,0-.99-.5-1.93-1.49-2.72s-1.73-1.98-1.98-3.22c-.25,1.24-.99,2.43-1.98,3.22-.99.79-1.49,1.73-1.49,2.72,0,1.91,1.55,3.47,3.47,3.47Z" />
        <path d="M16.93,8.28v-2.07c0-.2.13-.38.32-.45,1.11-.44,1.58-1.17,1.54-1.93-.06-1.13-1.03-1.68-1.54-1.78-.55-.11-1.98.05-2.09,1.63-.12,1.78-.62,2.08-.95,2.26" />
        <circle cx="17.07" cy="10.42" r="2.13" />
        <path d="M17.07,21.96c1.91,0,3.47-1.55,3.47-3.47,0-.99-.5-1.93-1.49-2.72s-1.73-1.98-1.98-3.22c-.25,1.24-.99,2.43-1.98,3.22-.99.79-1.49,1.73-1.49,2.72,0,1.91,1.55,3.47,3.47,3.47Z" />
      </svg>
    );
  },
);

export default EarRings05;
