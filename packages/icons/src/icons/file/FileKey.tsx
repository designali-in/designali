import * as React from "react";

import { DesignaliProps } from "../../types";

export const FileKey = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <circle cx="10" cy="16" r="2" />
        <path d="m16 10-4.5 4.5" />
        <path d="m15 11 1 1" />
      </svg>
    );
  },
);

export default FileKey;
