import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileBadge2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
  <circle  cx="12" cy="10" r="3"/>
  <path  d="M14,2v4c0,1.1.9,2,2,2h4"/>
  <path  d="M14,12.5l1,5.5-3-1-3,1,1-5.5"/>
</svg>
    );
  },
);

export default FileBadge2;
