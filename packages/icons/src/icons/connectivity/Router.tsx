import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Router = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect  x="2" y="14" width="20" height="8" rx="2" ry="2"/>
  <path  d="M6.01,18h-.01"/>
  <path  d="M10.01,18h-.01"/>
  <path  d="M15,10v4"/>
  <path  d="M17.84,7.17c-1.56-1.56-4.09-1.56-5.66,0,0,0,0,0,0,0"/>
  <path  d="M20.66,4.34c-3.12-3.12-8.19-3.12-11.31,0"/>
</svg>
    );
  },
);

export default Router;
