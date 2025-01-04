import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Loader = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M12,2v4"/>
  <path  d="M16.2,7.8l2.9-2.9"/>
  <path  d="M18,12h4"/>
  <path  d="M16.2,16.2l2.9,2.9"/>
  <path  d="M12,18v4"/>
  <path  d="M4.9,19.1l2.9-2.9"/>
  <path  d="M2,12h4"/>
  <path  d="M4.9,4.9l2.9,2.9"/>
</svg>
    );
  },
);

export default Loader;
