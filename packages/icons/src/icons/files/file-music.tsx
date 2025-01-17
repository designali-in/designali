import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FIleMusic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
     <path  d="M10.5,22h7.5c1.1,0,2-.9,2-2V7l-5-5H6c-1.1,0-2,.9-2,2v8.4"/>
  <path  d="M8,18v-7.7l8-1.3v7"/>
  <circle  cx="14" cy="16" r="2"/>
  <circle  cx="6" cy="18" r="2"/>
</svg>
    );
  },
);

export default FIleMusic;
