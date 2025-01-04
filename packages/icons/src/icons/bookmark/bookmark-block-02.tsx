import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BookmarkBlock02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="3.23" y1="22" x2="21.3" y2="22" />

        <path d="M19.78,12v10l-7.78-4.44-7.78,4.44V4.22c0-1.23.99-2.22,2.22-2.22h5.56" />

        <circle cx="18.12" cy="5.07" r="3.06" />
        <path d="M15.95,2.89l4.35,4.35" />
      </svg>
    );
  },
);

export default BookmarkBlock02;
