import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Underpants03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M14,18.5c0-2.67,1.9-8.5,7.5-8.5M10,18.5c0-2.67-1.9-8.5-7.5-8.5"/>
  <path  d="M2,8v1.56c0,.3.03.57.11.86.83,2.9,3.81,7.24,7.42,8.44.32.11.62.14.96.14h3.02c.34,0,.64-.03.96-.14,3.61-1.2,6.59-5.54,7.42-8.44.08-.29.11-.56.11-.86v-1.56c0-1.41,0-2.12-.44-2.56-.44-.44-1.15-.44-2.56-.44H5c-1.41,0-2.12,0-2.56.44-.44.44-.44,1.15-.44,2.56Z"/>
  <line  x1="10.33" y1="8.38" x2="13.67" y2="8.38"/>
</svg>
    );
  },
);

export default Underpants03;
