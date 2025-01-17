import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileAudio02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5,22h14c1.1,0,2-.9,2-2V7l-5-5H7c-1.1,0-2,.9-2,2v2" />
        <path d="M15,2v4c0,1.1.9,2,2,2h4" />
        <circle cx="4" cy="17" r="1" />
        <path d="M3,17v-3c0-2.21,1.79-4,4-4s4,1.79,4,4v3" />
        <circle cx="10" cy="17" r="1" />
      </svg>
    );
  },
);

export default FileAudio02;
