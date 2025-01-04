import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Send = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M14.53,21.69c.1.26.39.38.65.28.13-.05.24-.16.29-.3L21.97,2.66c.09-.26-.04-.54-.3-.63-.11-.04-.23-.04-.34,0L2.34,8.53c-.26.09-.4.37-.31.64.05.14.15.25.29.3l7.93,3.18c.51.2.91.6,1.11,1.11l3.18,7.93Z"/>
  <path  d="M21.85,2.15l-10.94,10.94"/>
</svg>
    );
  },
);

export default Send;
