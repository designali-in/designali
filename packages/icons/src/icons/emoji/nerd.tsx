import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Nerd = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M10,9c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM10,9c.56-.56,1.16-1,2-1s1.44.44,2,1M21,8h-3.27M6.27,8h-3.27M14,9c0,1.1.9,2,2,2s2-.9,2-2-.9-2-2-2-2,.9-2,2Z"/>
  <circle  cx="12" cy="12" r="10"/>
  <path  d="M8,14.79s1.5,2,4,2,4-2,4-2"/>
</svg>
    );
  },
);

export default Nerd;
