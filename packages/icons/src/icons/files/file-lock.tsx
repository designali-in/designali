import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
  <rect  x="8" y="12" width="8" height="6" rx="1" ry="1"/>
  <path  d="M10,12v-2c0-1.1.9-2,2-2s2,.9,2,2v2"/>
</svg>
    );
  },
);

export default FileLock;
