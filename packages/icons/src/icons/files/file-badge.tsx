import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileBadge = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
         <path  d="M13,22h6c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v3"/>
  <path  d="M15,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M6,17c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"/>
  <path  d="M8,16.5l1,5.5-3-1-3,1,1-5.5"/>
</svg>
    );
  },
);

export default FileBadge;
