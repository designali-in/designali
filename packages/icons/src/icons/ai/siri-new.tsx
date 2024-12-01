
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SiriNew = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M11.78,14c-1.33,1.39-3.21,3-4.78,3-2.76,0-5-2.24-5-5s2.24-5,5-5c5.09,0,6.54,8.5,11.52,8.5,1.92,0,3.48-1.57,3.48-3.5s-1.56-3.5-3.48-3.5c-.9,0-2.05.76-3.02,1.57"/>
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default SiriNew;
