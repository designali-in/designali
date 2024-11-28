import * as React from "react";

import { DesignaliProps } from "../types";

export const StarHalf = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
      </svg>
    );
  },
);

export default StarHalf;
