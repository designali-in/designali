import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SidebarBottom = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6,18h1M10,18h1" />
        <rect
          x="2.01"
          y="4.19"
          width="19.98"
          height="16.81"
          rx="3.45"
          ry="3.45"
        />
        <line x1="2" y1="14.98" x2="22" y2="14.98" />
      </svg>
    );
  },
);

export default SidebarBottom;
