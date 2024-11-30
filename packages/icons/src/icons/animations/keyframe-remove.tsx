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
        <line x1="22.01" y1="3.98" x2="14.63" y2="3.98" />
        <rect
          x="3.91"
          y="6.71"
          width="11.39"
          height="11.39"
          rx="1.08"
          ry="1.08"
          transform="translate(-5.96 10.43) rotate(-45)"
        />
      </svg>
    );
  },
);

export default KeyframeRemove;
