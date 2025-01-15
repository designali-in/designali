import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SidebarTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7,7.19h-1M11,7.19h-1" />
        <rect
          x="2.01"
          y="4.19"
          width="19.98"
          height="16.81"
          rx="3.45"
          ry="3.45"
        />
        <line x1="2" y1="10.21" x2="22" y2="10.21" />
      </svg>
    );
  },
);

export default SidebarTop;
