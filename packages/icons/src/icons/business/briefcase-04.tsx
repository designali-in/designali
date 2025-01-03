import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Briefcase04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M15.02,7v-2c0-1.1-.68-2-1.51-2h-3.02c-.83,0-1.51.9-1.51,2v2"/>
  <path  d="M22,11.3c-6.07,4-13.93,4-20,0"/>
  <rect  x="2" y="7" width="20" height="14" rx="2" ry="2"/>
  <line  x1="12" y1="14.39" x2="12" y2="15.96"/>
</svg>
    );
  },
);

export default Briefcase04;
