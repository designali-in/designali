import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Underpants02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M21.94,12.81l-.96-4.63c-.32-1.53-.48-2.29-1.03-2.74-.55-.45-1.33-.45-2.89-.45H6.94c-1.56,0-2.34,0-2.89.45-.55.45-.71,1.21-1.03,2.74l-.96,4.63c-.2.94.02,1.95,1.15,2.16.67.13,1.38-.01,2.05.07,1.51.18,2.86.98,3.7,2.2.74,1.35,1.44,1.76,3.04,1.76s2.3-.41,3.04-1.76c.84-1.22,2.19-2.02,3.7-2.2.68-.08,1.39.06,2.05-.07,1.13-.21,1.34-1.22,1.15-2.16Z"/>
  <path  d="M16,16l-2.11-8M8,16l2.11-8"/>
  <line  x1="3.21" y1="7.61" x2="20.79" y2="7.61"/>
</svg>
    );
  },
);

export default Underpants02;
