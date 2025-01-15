import * as React from "react";

import type { DesignaliProps } from "../../types";

export const InLove = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10.03,10.02h-1.29c-.45,0-.89.18-1.21.5M14.03,10.02h1.29c.45,0,.89.18,1.21.5"/>
  <path  d="M22,11.05v1c-.03,5.52-4.53,9.98-10.05,9.95-5.52-.03-9.98-4.53-9.95-10.05.03-5.52,4.53-9.98,10.05-9.95.32,0,.63.02.95.05"/>
  <path  d="M21.02,5.59c.49-.48.98-1.05.98-1.79,0-.99-.8-1.79-1.79-1.79-.57,0-.98.16-1.47.65-.49-.49-.89-.65-1.47-.65-.99,0-1.79.8-1.79,1.79,0,.75.49,1.32.98,1.79l2.28,2.28,2.28-2.28Z"/>
  <path  d="M8.02,16.09c2.2,2.2,5.77,2.2,7.97,0"/>
</svg>
    );
  },
);

export default InLove;
