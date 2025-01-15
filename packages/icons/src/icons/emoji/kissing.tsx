import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Kissing = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
  <path  d="M17,9.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5"/>
  <path  d="M8.01,9h0"/>
  <path  d="M10,14c.74,0,2.22.28,2.83.8.56.47-.91.86-.91,1.2s1.58.64.91,1.2c-.62.51-2.09.8-2.83.8"/>
  <path  d="M19.35,14.91c.86-.48,1.92-.14,2.4.79.49.93.23,2.1-.58,2.68l-1.55.99c-.75.48-1.13.72-1.5.61-.37-.11-.59-.53-1.03-1.36l-.9-1.71c-.43-.94-.13-2.1.72-2.64.84-.53,1.91-.24,2.44.64Z"/>
  <path  d="M14.14,21.82l-.99.12c-5.49.63-10.45-3.31-11.08-8.79C1.43,7.66,5.37,2.7,10.86,2.07c5.49-.63,10.45,3.31,11.08,8.79.04.32.06.63.06.95"/>
</svg>
    );
  },
);

export default Kissing;
