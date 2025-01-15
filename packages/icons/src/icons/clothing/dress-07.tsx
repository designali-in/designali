import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Dress07 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M20.38,3.46l-4.38-1.46c0,2.21-1.79,4-4,4s-4-1.79-4-4l-4.38,1.46c-.94.31-1.5,1.26-1.34,2.23l.58,3.47c.08.49.5.84.99.84h2.15v10c0,1.1.9,2,2,2h8c1.1,0,2-.9,2-2v-10h2.15c.49,0,.91-.35.99-.84l.58-3.47c.16-.97-.4-1.92-1.34-2.23Z"/>
  <path  d="M11.41,13c-.05-.2-.21-.36-.41-.41l-1.75-.45c-.08-.02-.12-.1-.1-.18.01-.05.05-.08.1-.1l1.75-.45c.2-.05.36-.21.41-.41l.45-1.75c.02-.08.1-.12.18-.1.05.01.09.05.1.1l.45,1.75c.05.2.21.36.41.41l1.75.45c.08.02.12.1.1.18-.01.05-.05.09-.1.1l-1.75.45c-.2.05-.36.21-.41.41l-.45,1.75c-.02.08-.1.12-.18.1-.05-.01-.09-.05-.1-.1l-.45-1.75Z"/>
</svg>
    );
  },
);

export default Dress07;
