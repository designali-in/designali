import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileInput = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M5,22h14c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v4"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M3,15h10"/>
  <path  d="M10,18l3-3-3-3"/>
</svg>
    );
  },
);

export default FileInput;
