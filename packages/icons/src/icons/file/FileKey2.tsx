import * as React from "react";

import { DesignaliProps } from "../../types";

export const FileKey2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
      >
        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="4" cy="16" r="2" />
        <path d="m10 10-4.5 4.5" />
        <path d="m9 11 1 1" />
      </svg>
    );
  },
);

export default FileKey2;
