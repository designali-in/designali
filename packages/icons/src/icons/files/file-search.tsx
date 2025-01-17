import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileSearch = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
       <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M5.27,21c.36.62,1.01,1,1.73,1h12.01c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v3"/>
  <path  d="M10,18l-1.5-1.5"/>
  <circle  cx="6" cy="14" r="3"/>
</svg>
    );
  },
);

export default FileSearch;
