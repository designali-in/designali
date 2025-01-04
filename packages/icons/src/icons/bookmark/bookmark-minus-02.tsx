import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookmarkMinus02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="14.49" y1="5.76" x2="22" y2="5.76" />
        <path d="M19.78,12v10l-7.78-4.44-7.78,4.44V4.22c0-1.23.99-2.22,2.22-2.22h5.56" />
      </svg>
    );
  },
);

export default BookmarkMinus02;
