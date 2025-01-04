import * as React from "react";

import type { DesignaliProps } from "../../types";

export const WandSparkles = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       
       <path  d="M21.64,3.64l-1.28-1.28c-.47-.47-1.24-.48-1.71,0,0,0,0,0,0,0L2.36,18.64c-.47.47-.48,1.24,0,1.71,0,0,0,0,0,0l1.28,1.28c.46.47,1.22.49,1.7.02,0,0,.02-.02.02-.02L21.64,5.36c.47-.46.49-1.22.02-1.7,0,0-.02-.02-.02-.02"/>
  <path  d="M14,7l3,3"/>
  <path  d="M5,6v4"/>
  <path  d="M19,14v4"/>
  <path  d="M10,2v2"/>
  <path  d="M7,8H3"/>
  <path  d="M21,16h-4"/>
  <path  d="M11,3h-2"/>
</svg>
    );
  },
);

export default WandSparkles;
