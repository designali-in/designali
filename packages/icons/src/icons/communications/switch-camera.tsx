import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SwitchCamera = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M11,19h-7c-1.1,0-2-.9-2-2V7c0-1.1.9-2,2-2h5"/>
  <path  d="M13,5h7c1.1,0,2,.9,2,2v10c0,1.1-.9,2-2,2h-5"/>
  <circle  cx="12" cy="12" r="3"/>
  <path  d="M18,22l-3-3,3-3"/>
  <path  d="M6,2l3,3-3,3"/>
</svg>
    );
  },
);

export default SwitchCamera;
