import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BabyBoyDress = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M5.95,9s-2.26,2.25-2.93,1.97c-.94-.39-1.35-4.16-.71-4.73l2.46-2.21c1.13-1.02,1.16-1.03,2.67-1.03h1.52c.23,1.36,1.54,2.99,3.04,2.99s2.82-1.63,3.04-2.99h1.52c1.51,0,1.54.01,2.67,1.03l2.46,2.21c.64.58.23,4.34-.71,4.73-.67.28-2.93-1.97-2.93-1.97"/>
  <path  d="M18,8.67v7.9c0,2.45-2.3,4.43-5.15,4.43h-1.71c-2.84,0-5.15-1.98-5.15-4.43v-7.9"/>
  <path  d="M6,9.59c1.13.51,3.01,1.2,5.43,1.29,3.02.12,5.36-.74,6.57-1.29"/>
</svg>
    );
  },
);

export default BabyBoyDress;
