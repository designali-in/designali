import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SingPostBig = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10 9H4L2 7l2-2h6" />
        <path d="M14 5h6l2 2-2 2h-6" />
        <path d="M10 22V4a2 2 0 1 1 4 0v18" />
        <path d="M8 22h8" />
      </svg>
    );
  },
);

export default SingPostBig;
