import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeDouble = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.92,12.48l-4.5,5.62c-.21.27-.56.27-.77,0l-4.5-5.62c-.21-.27-.21-.7,0-.96l4.5-5.62c.21-.27.56-.27.77,0l4.5,5.62c.21.27.21.7,0,.96Z" />
        <path
          fill="none"
          d="M14.34,5.9c.21-.27.56-.27.77,0l4.5,5.62c.21.27.21.7,0,.96l-4.5,5.62c-.21.27-.56.27-.77,0"
        />
      </svg>
    );
  },
);

export default KeyframeDouble;
