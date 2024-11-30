import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeTop = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="2" y1="2" x2="22" y2="2" />
        <line x1="12" y1="2" x2="12" y2="6.63" />
        <path d="M9.25,18.18l2.53-3.17c.12-.15.31-.15.43,0l2.53,3.17c.12.15.12.39,0,.54l-2.53,3.17c-.12.15-.31.15-.43,0l-2.53-3.17c-.12-.15-.12-.39,0-.54Z" />
      </svg>
    );
  },
);

export default KeyframeTop;
