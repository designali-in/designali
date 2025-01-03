import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BellPlus = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10.27,21c.55.96,1.78,1.28,2.73.73.3-.18.56-.43.73-.73"/>
  <path  d="M15,8h6"/>
  <path  d="M18,5v6"/>
  <path  d="M20,14.46c.23.3.47.59.74.86.37.41.34,1.04-.07,1.41-.18.17-.42.26-.67.26H4c-.55,0-1-.45-1-1,0-.25.09-.49.26-.67,1.33-1.37,2.74-2.83,2.74-7.33,0-3.31,2.69-6,6-6,.96,0,1.9.23,2.75.67"/>
</svg>
    );
  },
);

export default BellPlus;
