import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileScan = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M19,10v-3l-5-5H5c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h4"/>
  <path  d="M13,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M15,14c-1.1,0-2,.9-2,2"/>
  <path  d="M19,14c1.1,0,2,.9,2,2"/>
  <path  d="M19,22c1.1,0,2-.9,2-2"/>
  <path  d="M15,22c-1.1,0-2-.9-2-2"/>
</svg>
    );
  },
);

export default FileScan;
