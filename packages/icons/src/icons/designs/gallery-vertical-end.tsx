import * as React from "react";

import type { DesignaliProps } from "../../types";

export const GalleryVerticalEnd = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
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
      <path d="M7,2h10" />
      <path d="M5,6h14" />
      <rect x="3" y="10" width="18" height="12" rx="2" ry="2" />
    </svg>
  );
});

export default GalleryVerticalEnd;
