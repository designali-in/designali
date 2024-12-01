import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiScan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M2,16.74c0,.98,0,1.47.08,1.87.33,1.67,1.64,2.98,3.31,3.31.41.08.9.08,1.87.08M22,16.74c0,.98,0,1.47-.08,1.87-.33,1.67-1.64,2.98-3.31,3.31-.41.08-.9.08-1.87.08M22,7.26c0-.98,0-1.47-.08-1.87-.33-1.67-1.64-2.98-3.31-3.31-.41-.08-.9-.08-1.87-.08M2,7.26c0-.98,0-1.47.08-1.87.33-1.67,1.64-2.98,3.31-3.31.41-.08.9-.08,1.87-.08"/>
  <path  d="M12,8.32v-2.11M9.89,11.47v.53M14.11,11.47v.53M10.95,8.32h2.11c1.98,0,2.98,0,3.59.62.62.62.62,1.61.62,3.59h0c0,1.98,0,2.98-.62,3.59s-1.61.62-3.59.62h-2.11c-1.98,0-2.98,0-3.59-.62-.62-.62-.62-1.61-.62-3.59h0c0-1.98,0-2.98.62-3.59.62-.62,1.61-.62,3.59-.62Z"/>
</svg>
    );
  },
);

export default AiScan;
