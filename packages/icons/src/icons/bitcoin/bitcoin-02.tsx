import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bitcoin02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M12,2.75v2.75M11.25,2.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"/>
  <path  d="M5.75,2.75v2.75l1.25,1M5,2.75c0,.41.34.75.75.75s.75-.34.75-.75-.34-.75-.75-.75-.75.34-.75.75Z"/>
  <path  d="M18.25,2.75v2.75l-1.25,1M19,2.75c0,.41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z"/>
  <path  d="M10.44,17.67v-5.33M12,12.33v-1.33M12,19v-1.33M10.44,15h3.12M13.56,15c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,15c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle  cx="12" cy="15.25" r="6.75"/>
</svg>
    );
  },
);

export default Bitcoin02;
