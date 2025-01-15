import * as React from "react";

import type { DesignaliProps } from "../../types";

export const FolderKanban = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M4,20.5h16c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2h-7.93c-.67,0-1.29-.34-1.66-.9l-.82-1.2c-.37-.56-.99-.9-1.66-.9h-3.93c-1.1,0-2,.9-2,2v13c0,1.1.9,2,2,2Z" />
        <path d="M8,10.5v4" />
        <path d="M12,10.5v2" />
        <path d="M16,10.5v6" />
      </svg>
    );
  },
);

export default FolderKanban;
