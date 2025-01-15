import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Hand = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18.02,11.01v-4.97c0-1.1-.89-1.99-1.99-1.99s-1.99.89-1.99,1.99" />
        <path d="M14.04,10.01v-5.97c0-1.1-.89-1.99-1.99-1.99s-1.99.89-1.99,1.99v1.99" />
        <path d="M10.06,10.51v-4.48c0-1.1-.89-1.99-1.99-1.99s-1.99.89-1.99,1.99v7.96" />
        <path d="M18.02,8.02c0-1.1.89-1.99,1.99-1.99s1.99.89,1.99,1.99v5.97c0,4.4-3.56,7.96-7.96,7.96h-1.99c-2.79,0-4.48-.86-5.96-2.33l-3.58-3.58c-.74-.82-.67-2.07.14-2.81.76-.69,1.91-.68,2.67,0l1.75,1.75" />
      </svg>
    );
  },
);

export default Hand;
