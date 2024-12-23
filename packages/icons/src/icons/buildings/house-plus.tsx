import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HousePlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M13.28,2.44c-.79-.6-1.89-.58-2.64.06l-7.37,6.31c-.47.4-.75.99-.75,1.61v9.47c0,1.16.94,2.11,2.11,2.11h14.74c1.16,0,2.11-.94,2.11-2.11v-7.74"/>
  <path  d="M15.16,22v-8.42c0-.58-.47-1.05-1.05-1.05h-4.21c-.58,0-1.05.47-1.05,1.05v8.42"/>
  <path  d="M15.16,6.21h6.32"/>
  <path  d="M18.32,3.05v6.32"/>
</svg>
    );
  },
);

export default HousePlus;
