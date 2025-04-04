import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileMusic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="14" cy="16" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5" />
        <path d="M8 18v-7.7L16 9v7" />
      </svg>
    );
  },
);

export default FileMusic;
