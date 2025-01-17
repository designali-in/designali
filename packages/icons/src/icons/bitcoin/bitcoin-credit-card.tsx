import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinCreditCard = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M16.12,19.5v-6M18,13.5v-1.5M18,21v-1.5M16.12,16.5h3.75M19.88,16.5c.62,0,1.12.5,1.12,1.12v.75c0,.62-.5,1.12-1.12,1.12h-4.88M19.88,16.5c.62,0,1.12-.5,1.12-1.12v-.75c0-.62-.5-1.12-1.12-1.12h-4.88"/>
  <line  x1="2.04" y1="8.25" x2="21.96" y2="8.25"/>
  <path  d="M11.99,19.86h-7.28c-1.49,0-2.71-1.21-2.71-2.71V6.85c0-1.49,1.21-2.71,2.71-2.71h14.59c1.49,0,2.71,1.21,2.71,2.71v4.15"/>
</svg>
    );
  },
);

export default BitcoinCreditCard;
