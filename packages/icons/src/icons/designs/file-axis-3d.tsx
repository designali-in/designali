import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileAxis3d = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M15,2H6c-1.1,0-2,.9-2,2v16c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2V7l-5-5Z" />
        <path d="M14,2v4c0,1.1.9,2,2,2h4" />
        <path d="M8,18l4-4" />
        <path d="M8,10v8h8" />
      </svg>
    );
  },
);

export default FileAxis3d;
