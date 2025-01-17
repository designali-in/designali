import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BitcoinDown01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
          <path  d="M10.44,11.17v-5.33M12,5.83v-1.33M12,12.5v-1.33M10.44,8.5h3.12M13.56,8.5c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M13.56,8.5c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <circle  cx="12" cy="8.54" r="6.54"/>
  <path  d="M12,17.83v4.17"/>
  <path  d="M14.08,19.92l-2.08,2.08-2.08-2.08"/>
</svg>
    );
  },
);

export default BitcoinDown01;
