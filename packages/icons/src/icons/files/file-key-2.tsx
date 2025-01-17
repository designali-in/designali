import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileKey2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path  d="M5,22h14c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v6"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <circle  cx="5" cy="16" r="2"/>
  <path  d="M11,10l-4.5,4.5"/>
  <path  d="M10,11l1,1"/>
</svg>
    );
  },
);

export default FileKey2;
