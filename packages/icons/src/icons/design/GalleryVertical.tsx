import * as React from "react";

import type { DesignaliProps } from "../../types";

export const GalleryVertical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M3 2h18" />
        <rect width="18" height="12" x="3" y="6" rx="2" />
        <path d="M3 22h18" />
      </svg>
    );
  },
);

export default GalleryVertical;
