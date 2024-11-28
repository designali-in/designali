import * as React from "react";

import { DesignaliProps } from "../../types";

export const FileLock = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <rect width="8" height="6" x="8" y="12" rx="1" />
        <path d="M10 12v-2a2 2 0 1 1 4 0v2" />
      </svg>
    );
  },
);

export default FileLock;
