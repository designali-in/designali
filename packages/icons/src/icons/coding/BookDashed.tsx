import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookDashed = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12 17h2" />
        <path d="M12 22h2" />
        <path d="M12 2h2" />
        <path d="M18 22h1a1 1 0 0 0 1-1" />
        <path d="M18 2h1a1 1 0 0 1 1 1v1" />
        <path d="M20 15v2h-2" />
        <path d="M20 8v3" />
        <path d="M4 11V9" />
        <path d="M4 19.5V15" />
        <path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
        <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
      </svg>
    );
  },
);

export default BookDashed;
