import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Lectern = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M16,12h3c.87,0,1.63-.56,1.9-1.38l1.06-3.33c.16-.53-.14-1.09-.67-1.24-.09-.03-.19-.04-.29-.04H3c-.55,0-1,.45-1,1,0,.1.01.19.04.29l1.06,3.33c.27.82,1.04,1.38,1.9,1.38h3"/>
  <path  d="M18,6v-3c0-.55-.45-1-1-1h-3"/>
  <rect  x="8" y="10" width="8" height="12" rx="1" ry="1"/>
</svg>
    );
  },
);

export default Lectern;
