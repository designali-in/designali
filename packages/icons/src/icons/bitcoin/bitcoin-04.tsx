import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bitcoin04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M13.94,18.17v-5.33M15.51,12.83v-1.33M15.51,19.5v-1.33M13.94,15.5h3.12M17.07,15.5c.52,0,.94.45.94,1v.67c0,.55-.42,1-.94,1h-4.06M17.07,15.5c.52,0,.94-.45.94-1v-.67c0-.55-.42-1-.94-1h-4.06"/>
  <path  d="M2,4v8.04c0,.7,1.18,1.59,4.13,1.96M2.11,8.55c1.21,1.06,3.35,1.51,5.65,1.51M14,4.12v2.01"/>
  <circle  cx="15.5" cy="15.5" r="6.5"/>
  <ellipse  cx="8" cy="3.83" rx="6" ry="1.83"/>
</svg>
    );
  },
);

export default Bitcoin04;
