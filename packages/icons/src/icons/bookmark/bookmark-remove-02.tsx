import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookmarkRemove02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19.78,12v10l-7.78-4.44-7.78,4.44V4.22c0-1.23.99-2.22,2.22-2.22h5.56" />
        <line x1="16.69" y1="2" x2="21.99" y2="7.32" />
        <line x1="22" y1="2.01" x2="16.68" y2="7.31" />
      </svg>
    );
  },
);

export default BookmarkRemove02;
