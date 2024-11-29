import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BrickWall = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 9v6" />
        <path d="M16 15v6" />
        <path d="M16 3v6" />
        <path d="M3 15h18" />
        <path d="M3 9h18" />
        <path d="M8 15v6" />
        <path d="M8 3v6" />
      </svg>
    );
  },
);

export default BrickWall;
