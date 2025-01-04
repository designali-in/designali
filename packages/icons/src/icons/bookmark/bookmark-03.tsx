import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Bookmark03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M8,2v7.33c0,1.25,0,1.87.39,2.09.75.43,2.15-1.01,2.82-1.44.39-.25.58-.38.8-.38s.41.13.8.38c.67.43,2.07,1.88,2.82,1.44.39-.22.39-.85.39-2.09V2" />
        <rect x="4.22" y="2" width="15.56" height="20" rx="2.03" ry="2.03" />
      </svg>
    );
  },
);

export default Bookmark03;
