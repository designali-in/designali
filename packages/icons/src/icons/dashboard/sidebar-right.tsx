import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SidebarRight = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,7h1M18,10h1" />
        <rect
          x="2.01"
          y="3"
          width="19.98"
          height="18"
          rx="3.45"
          ry="3.45"
          transform="translate(24 24) rotate(-180)"
        />
        <line x1="15.16" y1="3" x2="15.16" y2="21" />
      </svg>
    );
  },
);

export default SidebarRight;
