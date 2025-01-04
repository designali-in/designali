import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LoaderPinwheel = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M22,12c0,2.76-2.24,5-5,5s-5-2.24-5-5-2.24-5-5-5-5,2.24-5,5"/>
  <path  d="M7,20.7c-2.4-1.38-3.23-4.45-1.85-6.85,1.38-2.4,4.45-3.23,6.85-1.85,2.37,1.38,5.42.57,6.8-1.8,1.38-2.37.57-5.42-1.8-6.8"/>
  <path  d="M7,3.3c2.37-1.38,5.42-.57,6.8,1.8,1.38,2.37.57,5.42-1.8,6.8s-3.18,4.43-1.8,6.8c1.38,2.37,4.43,3.18,6.8,1.8"/>
  <circle  cx="12" cy="12" r="10"/>
</svg>
    );
  },
);

export default LoaderPinwheel;
