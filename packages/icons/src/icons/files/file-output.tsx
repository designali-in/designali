import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileOutput = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M15,1.99v4c0,1.1.9,2,2,2h4"/>
  <path  d="M5,6.99v-3c0-1.1.9-2,2-2-1.1,0-2,.9-2,2"/>
  <path  d="M5.06,20.99c.4.71,1.19,1.11,2,1h11.94c1.1,0,2-.89,2-2V6.99l-5-5H7"/>
  <path  d="M6,10.99l-3,3"/>
  <path  d="M6,16.99l-3-3h10"/>
</svg>
    );
  },
);

export default FileOutput;
