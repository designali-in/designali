import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Satellite = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M13.11,6.44l-4.44-4.44-4.44,4.44,4.44,4.44"/>
  <path  d="M17.56,10.89l4.44,4.44-4.44,4.44-4.44-4.44"/>
  <path  d="M7.56,12l4.44,4.44,6.67-6.67-4.44-4.44-6.67,6.67Z"/>
  <path  d="M16.44,7.56l3.33-3.33"/>
  <path  d="M8.67,22c0-3.68-2.98-6.67-6.67-6.67"/>
</svg>
    );
  },
);

export default Satellite;
