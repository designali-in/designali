
import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiSecurity01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M9.96,7v1.98M6.5,10.5h2.04M14.46,10.5h2.04M14.46,13.47h2.04M6.5,13.47h2.04M9.96,15.02v1.98M12.96,15.02v1.98M12.95,7v1.98M9.53,14.97h3.94c.55,0,.99-.45.99-1v-3.99c0-.55-.44-1-.99-1h-3.94c-.55,0-.99.45-.99,1v3.99c0,.55.44,1,.99,1Z"/>
  <path  d="M21,11.18v-2.9c0-1.64,0-2.46-.4-2.99-.4-.53-1.32-.79-3.15-1.31-1.25-.35-2.35-.78-3.23-1.17-1.2-.53-1.8-.8-2.22-.8s-1.02.27-2.22.8c-.88.39-1.98.82-3.23,1.17-1.83.52-2.74.78-3.15,1.31-.4.53-.4,1.36-.4,2.99v2.9c0,5.63,5.06,9,7.59,10.34.61.32.91.48,1.41.48s.8-.16,1.41-.48c2.53-1.34,7.59-4.71,7.59-10.34Z"/>
</svg>
    );
  },
);

export default AiSecurity01;
