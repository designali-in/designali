import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Suit01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M8,2c-1,0-.82,2.42-2.2,3.46-1.03.78-2.91-.05-3.67,1.26-.23.4-.12.92.11,1.98l1.99,9.09c.39,1.78.63,3.96,2.77,4.22h10c2.14-.26,2.38-2.43,2.77-4.22l1.99-9.09c.23-1.05.35-1.58.11-1.98-.77-1.31-2.64-.48-3.67-1.26-1.39-1.04-1.2-3.46-2.2-3.46"/>
  <circle  cx="12" cy="12" r=".05"/>
  <circle  cx="12" cy="14.85" r=".05"/>
  <circle  cx="12" cy="17.65" r=".05"/>
  <path  d="M7.72,2.12c.93-.52,2.22.82,2.88,1.33.91.69,1.36,1.03,1.39,1.48,0,.05,0,.1,0,.14-.03.45-.49.8-1.39,1.48-.66.5-1.95,1.85-2.88,1.33-.97-.54-.97-5.22,0-5.76Z"/>
  <path  d="M16.28,2.12c-.93-.52-2.22.82-2.88,1.33-.91.69-1.36,1.03-1.39,1.48,0,.05,0,.1,0,.14.03.45.49.8,1.39,1.48.66.5,1.95,1.85,2.88,1.33.97-.54.97-5.22,0-5.76Z"/>
</svg>
    );
  },
);

export default Suit01;
