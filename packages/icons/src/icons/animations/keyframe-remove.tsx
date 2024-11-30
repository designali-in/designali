import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyframeRemove = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="22" y1="2" x2="16" y2="2" />
        <path d="M15.59,14.03l-6.16,7.7c-.29.36-.76.36-1.05,0l-6.16-7.7c-.29-.36-.29-.95,0-1.31l6.16-7.7c.29-.36.76-.36,1.05,0l6.16,7.7c.29.36.29.95,0,1.31Z" />
      </svg>
    );
  },
);

export default KeyframeRemove;
