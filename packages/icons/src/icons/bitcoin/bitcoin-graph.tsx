import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinGraph = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M17.72,9.02V3.41M19.36,3.41v-1.4M19.36,10.42v-1.4M17.72,6.22h3.29M21.01,6.22c.54,0,.99.47.99,1.05v.7c0,.58-.44,1.05-.99,1.05h-4.27M21.01,6.22c.54,0,.99-.47.99-1.05v-.7c0-.58-.44-1.05-.99-1.05h-4.27"/>
  <rect  x="2" y="12.53" width="4.21" height="9.47" rx="1.12" ry="1.12"/>
  <path  d="M22,12.53v8.19c0,.7-.5,1.28-1.12,1.28h-1.96c-.62,0-1.12-.57-1.12-1.28v-8.19"/>
  <rect  x="9.9" y="8.87" width="4.21" height="13.12" rx="1.12" ry="1.12"/>
</svg>
    );
  },
);

export default BitcoinGraph;
