import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileVideo2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="6" x="2" y="12" rx="1" />
        <path d="m10 15.5 4 2.5v-6l-4 2.5" />
      </svg>
    );
  },
);

export default FileVideo2;
