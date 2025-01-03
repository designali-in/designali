import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Briefcase03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M16,7v-2c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2"/>
  <path  d="M22,14c-6.07,4-13.93,4-20,0"/>
  <rect  x="2" y="7" width="20" height="14" rx="2" ry="2"/>
  <rect  x="10.85" y="15.85" width="2.3" height="2.3"/>
</svg>
    );
  },
);

export default Briefcase03;
