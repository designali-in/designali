import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileSearch2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      <path  d="M15,2H6c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V7l-5-5Z"/>
  <path  d="M14,2v4c0,1.1.9,2,2,2h4"/>
  <circle  cx="11.5" cy="14.5" r="2.5"/>
  <path  d="M13.3,16.3l1.7,1.7"/>
</svg>
    );
  },
);

export default FileSearch2;
