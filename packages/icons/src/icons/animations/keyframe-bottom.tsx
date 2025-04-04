import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeBottom = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="22" y1="22" x2="2" y2="22" />
        <line x1="12" y1="22" x2="12" y2="17.37" />
        <path d="M14.75,5.82l-2.53,3.17c-.12.15-.31.15-.43,0l-2.53-3.17c-.12-.15-.12-.39,0-.54l2.53-3.17c.12-.15.31-.15.43,0l2.53,3.17c.12.15.12.39,0,.54Z" />
      </svg>
    );
  },
);

export default KeyframeBottom;
