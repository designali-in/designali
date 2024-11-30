import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Keyframe = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect
          x="4.62"
          y="4.62"
          width="14.75"
          height="14.75"
          rx="1.08"
          ry="1.08"
          transform="translate(-4.97 12) rotate(-45)"
        />
      </svg>
    );
  },
);

export default Keyframe;
