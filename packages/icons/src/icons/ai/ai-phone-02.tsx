import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiPhone02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M20.25,6.75l-2.25,2.25h-2M19.5,6.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"/>
  <path  d="M20.25,17.25l-2.25-2.25h-2M19.5,17.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75Z"/>
  <path  d="M20.25,12h-8.25M19.5,12c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"/>
  <path  d="M16,6c-.08-1.42-.3-2.32-.91-2.97-.96-1.03-2.49-1.03-5.57-1.03s-4.61,0-5.57,1.03c-.96,1.03-.96,2.68-.96,5.97v6c0,3.3,0,4.95.96,5.97.96,1.03,2.49,1.03,5.57,1.03s4.61,0,5.57-1.03c.61-.65.83-1.56.91-2.97"/>
  <circle  cx="9.49" cy="19.06" r=".3"/>
</svg>
    );
  },
);

export default AiPhone02;
