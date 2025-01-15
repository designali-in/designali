import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Laughing = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M2,11C2.5,5.95,6.79,2,12,2s9.5,3.95,10,9M19,19.18c-1.81,1.75-4.28,2.82-7,2.82s-5.19-1.08-7-2.82"/>
  <path  d="M7,9.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5M14,9.5c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5"/>
  <path  d="M6,12c-1.56.4-4.46,1.23-3.94,3.78.27,1.26,1.67,1.49,2.44.93,1.84-1.36,0-2.71,1.5-4.71Z"/>
  <path  d="M18,12c1.56.4,4.46,1.23,3.94,3.78-.27,1.26-1.67,1.49-2.44.93-1.84-1.36,0-2.71-1.5-4.71Z"/>
  <path  d="M16.13,13.31c-.34,2.01-2.09,3.47-4.13,3.44-2.03.03-3.79-1.43-4.13-3.44h8.25Z"/>
</svg>
    );
  },
);

export default Laughing;
