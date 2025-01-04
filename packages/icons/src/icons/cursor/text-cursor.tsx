import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TextCursor = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M17,22h-1c-2.21,0-4-1.79-4-4V6c0-2.21,1.79-4,4-4h1"/>
  <path  d="M7,22h1c2.21,0,4-1.79,4-4v-1"/>
  <path  d="M7,2h1c2.21,0,4,1.79,4,4v1"/>
</svg>
    );
  },
);

export default TextCursor;
