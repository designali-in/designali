import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FileOutput = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" />
        <path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" />
        <path d="m5 11-3 3" />
        <path d="m5 17-3-3h10" />
      </svg>
    );
  },
);

export default FileOutput;
